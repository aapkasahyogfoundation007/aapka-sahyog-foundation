"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { collection, query, orderBy, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface MenuItem {
  id: string
  title: string
  type: "main" | "submenu"
  parentId: string | null
  order: number
  level: number
  image?: string
  children?: MenuItem[]
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [teamMenuOpen, setTeamMenuOpen] = useState(false)
  const [menuHierarchy, setMenuHierarchy] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Set<string>>(new Set())
  const [expandedDesktopMenus, setExpandedDesktopMenus] = useState<Set<string>>(new Set())
  const [isClosing, setIsClosing] = useState(false)

  const teamMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const menuQuery = query(collection(db, "menuItems"), orderBy("order"))
        const menuSnapshot = await getDocs(menuQuery)
        
        const allItems: MenuItem[] = []
        menuSnapshot.forEach((doc) => {
          const data = doc.data()
          allItems.push({
            id: doc.id,
            title: data.title || "",
            type: data.type || "main",
            parentId: data.parentId || null,
            order: data.order || 0,
            level: data.level || 0,
            image: data.image || "",
            children: []
          })
        })
        
        const hierarchy = buildMenuHierarchy(allItems)
        setMenuHierarchy(hierarchy)
        
      } catch (error) {
        console.error("Error loading navigation data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    // Close desktop menus when team menu closes
    if (!teamMenuOpen) {
      setExpandedDesktopMenus(new Set())
    }
  }, [teamMenuOpen])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (teamMenuRef.current && !teamMenuRef.current.contains(event.target as Node)) {
        closeTeamMenu()
      }
      if (mobileMenuRef.current && isOpen && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Handle escape key to close menus
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (teamMenuOpen) {
          closeTeamMenu()
        }
        if (isOpen) {
          closeMobileMenu()
        }
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [teamMenuOpen, isOpen])

  const buildMenuHierarchy = (items: MenuItem[]): MenuItem[] => {
    const itemMap: { [key: string]: MenuItem } = {}
    const tree: MenuItem[] = []
    
    items.forEach(item => {
      itemMap[item.id] = { ...item, children: [] }
    })
    
    items.forEach(item => {
      const currentItem = itemMap[item.id]
      if (item.parentId && itemMap[item.parentId]) {
        if (!itemMap[item.parentId].children) {
          itemMap[item.parentId].children = []
        }
        itemMap[item.parentId].children!.push(currentItem)
      } else if (item.type === "main") {
        tree.push(currentItem)
      }
    })
    
    const sortChildren = (menuList: MenuItem[]) => {
      menuList.sort((a, b) => a.order - b.order)
      menuList.forEach(menu => {
        if (menu.children && menu.children.length > 0) {
          sortChildren(menu.children)
        }
      })
    }
    
    sortChildren(tree)
    return tree
  }

  const closeTeamMenu = () => {
    setTeamMenuOpen(false)
    setExpandedDesktopMenus(new Set())
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
    setExpandedMobileMenus(new Set())
  }

  const closeAllMenus = () => {
    closeTeamMenu()
    closeMobileMenu()
  }

  // Toggle mobile menu expansion
  const toggleMobileMenu = (menuId: string) => {
    const newExpanded = new Set(expandedMobileMenus)
    if (newExpanded.has(menuId)) {
      newExpanded.delete(menuId)
    } else {
      newExpanded.add(menuId)
    }
    setExpandedMobileMenus(newExpanded)
  }

  // Toggle desktop menu expansion
  const toggleDesktopMenu = (menuId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    
    const newExpanded = new Set(expandedDesktopMenus)
    if (newExpanded.has(menuId)) {
      newExpanded.delete(menuId)
    } else {
      newExpanded.add(menuId)
    }
    setExpandedDesktopMenus(newExpanded)
  }

  // Handle desktop menu hover with delay
  const handleDesktopMenuLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    
    closeTimeoutRef.current = setTimeout(() => {
      if (teamMenuOpen) {
        setTeamMenuOpen(false)
        setExpandedDesktopMenus(new Set())
      }
    }, 300)
  }

  const handleDesktopMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    if (!teamMenuOpen) {
      setTeamMenuOpen(true)
    }
  }

  // Render desktop team menu recursively
  const renderDesktopTeamMenu = (menus: MenuItem[], level = 0) => {
    if (loading) {
      return (
        <div className="px-4 py-8 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
        </div>
      )
    }
    
    if (menus.length === 0) {
      return (
        <div className="px-4 py-3 text-sm text-gray-500">
          No team sections configured.
        </div>
      )
    }

    return menus.map((menu) => {
      const isExpanded = expandedDesktopMenus.has(menu.id)
      const hasChildren = menu.children && menu.children.length > 0
      
      return (
        <div 
          key={menu.id} 
          className="mb-1 last:mb-0"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current)
            }
          }}
        >
          <div className="flex items-center justify-between hover:bg-gray-50 rounded px-2 transition-colors duration-200">
            <Link
              href={`/team/${menu.id}`}
              className={`flex-1 px-2 py-2 font-medium text-gray-800 hover:text-black rounded transition-colors ${
                level > 0 ? "text-sm" : ""
              }`}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault()
                  toggleDesktopMenu(menu.id, e)
                } else {
                  closeTeamMenu()
                }
              }}
              style={{ paddingLeft: `${level * 20}px` }}
            >
              {menu.title}
            </Link>
            
            {hasChildren && (
              <button
                onClick={(e) => toggleDesktopMenu(menu.id, e)}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
                aria-label={isExpanded ? `Collapse ${menu.title}` : `Expand ${menu.title}`}
              >
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isExpanded ? 'rotate-90' : ''
                  }`} 
                />
              </button>
            )}
          </div>
          
          {/* Render children if expanded */}
          {isExpanded && hasChildren && menu.children && (
            <div 
              className="mt-1 ml-2 pl-2 border-l border-gray-200 transition-all duration-200"
              style={{
                maxHeight: '500px',
                overflow: 'hidden',
                animation: 'fadeIn 0.2s ease-out'
              }}
            >
              {renderDesktopTeamMenu(menu.children, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  // Recursive function to render mobile team menu
  const renderMobileTeamMenu = (menus: MenuItem[], level = 0) => {
    return menus.map((menu) => {
      const isExpanded = expandedMobileMenus.has(menu.id)
      const hasChildren = menu.children && menu.children.length > 0

      return (
        <div 
          key={menu.id} 
          className={`${level > 0 ? 'border-l border-gray-200 ml-4 pl-4' : ''}`}
        >
          <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 transition-colors">
            <Link
              href={`/team/${menu.id}`}
              className={`flex-1 text-gray-700 hover:text-black ${
                level > 0 ? 'text-sm' : 'font-medium'
              }`}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault()
                  toggleMobileMenu(menu.id)
                } else {
                  closeMobileMenu()
                }
              }}
            >
              {menu.title}
            </Link>
            
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleMobileMenu(menu.id)
                }}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
                aria-label={isExpanded ? `Collapse ${menu.title}` : `Expand ${menu.title}`}
              >
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>
          
          {/* Render children if expanded */}
          {isExpanded && hasChildren && menu.children && (
            <div 
              className="mt-1 transition-all duration-200"
              style={{
                maxHeight: '500px',
                overflow: 'hidden',
                animation: 'fadeIn 0.2s ease-out'
              }}
            >
              {renderMobileTeamMenu(menu.children, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-work", label: "Our Work" },
    { href: "/contact", label: "Contact Us" },
  ]

  const socialLinks = [
    { 
      href: "https://www.facebook.com/share/1SpxhPXM8r/", 
      label: "Facebook", 
      icon: <Facebook className="w-4 h-4" />,
      ariaLabel: "Visit our Facebook page"
    },
    { 
      href: "https://www.instagram.com/aapkasahyogfoundation?igsh=ZzRhbjZ6dWVkYm1p", 
      label: "Instagram", 
      icon: <Instagram className="w-4 h-4" />,
      ariaLabel: "Visit our Instagram page"
    },
    { 
      href: "https://youtube.com/@aapkasahyogfoundation?si=grYCLhqeIoBHVOSc", 
      label: "YouTube", 
      icon: <Youtube className="w-4 h-4" />,
      ariaLabel: "Visit our YouTube channel"
    },
  ]

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-5px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
          max-height: 0;
        }
        to {
          opacity: 1;
          transform: translateY(0);
          max-height: 500px;
        }
      }
      
      .team-menu-enter {
        animation: fadeIn 0.2s ease-out;
      }
      
      .submenu-enter {
        animation: slideDown 0.2s ease-out;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <Image src="/images/asf-logo.png" alt="ASF Logo" height={32} width={32} />
            </div>
            <span className="hidden sm:inline text-gray-900">Aapka Sahyog Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={closeAllMenus}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Team Dropdown */}
            <div 
              className="relative"
              ref={teamMenuRef}
              onMouseEnter={handleDesktopMenuEnter}
              onMouseLeave={handleDesktopMenuLeave}
            >
              <button
                onClick={() => {
                  setTeamMenuOpen(!teamMenuOpen)
                  if (teamMenuOpen) {
                    setExpandedDesktopMenus(new Set())
                  }
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  teamMenuOpen ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
                aria-expanded={teamMenuOpen}
              >
                Team
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${teamMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {teamMenuOpen && (
                <div 
                  className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 team-menu-enter"
                >
                  <div className="p-2 max-h-[80vh] overflow-y-auto">
                    <div className="mb-2 px-2 py-1 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Team Structure
                      </h3>
                    </div>
                    {renderDesktopTeamMenu(menuHierarchy)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Social Media and Donate Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <Link
              href="/get-involved"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
              onClick={closeAllMenus}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              if (isOpen) {
                closeMobileMenu()
              } else {
                setIsOpen(true)
              }
            }}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="space-y-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mx-2"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Team Menu */}
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2 px-2">Team Structure</div>
                <div className="space-y-1">
                  {loading ? (
                    <div className="px-2 py-2 text-sm text-gray-500">Loading...</div>
                  ) : menuHierarchy.length > 0 ? (
                    <div className="border-l border-gray-100 pl-2">
                      {renderMobileTeamMenu(menuHierarchy)}
                    </div>
                  ) : (
                    <div className="px-2 py-2 text-sm text-gray-500">No team sections found.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Social Media Links */}
            <div className="px-4 py-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-500 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Donate Button */}
            <div className="px-4 pt-2 pb-6">
              <Link
                href="/get-involved"
                className="block w-full px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors"
                onClick={closeMobileMenu}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}