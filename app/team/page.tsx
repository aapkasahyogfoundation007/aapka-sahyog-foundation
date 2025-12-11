"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, MapPin, Briefcase, Mail, Phone, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Team() {
  // State for main tabs
  const [activeTab, setActiveTab] = useState<'national' | 'state' | 'district'>('national')
  
  // State for sub-tabs
  const [activeStateTab, setActiveStateTab] = useState('Delhi')
  const [activeDistrictTab, setActiveDistrictTab] = useState('Gautam Budh Nagar')

  // Refs for scrollable tabs
  const mainTabsRef = useRef<HTMLDivElement>(null)
  const stateTabsRef = useRef<HTMLDivElement>(null)
  const districtTabsRef = useRef<HTMLDivElement>(null)

  // Scroll functions for tabs
  const scrollMainTabs = (direction: 'left' | 'right') => {
    if (mainTabsRef.current) {
      const scrollAmount = 200
      mainTabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollStateTabs = (direction: 'left' | 'right') => {
    if (stateTabsRef.current) {
      const scrollAmount = 150
      stateTabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollDistrictTabs = (direction: 'left' | 'right') => {
    if (districtTabsRef.current) {
      const scrollAmount = 150
      districtTabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const nationalTeam = [
    {
      name: "Sonu Giri",
      designation: "President",
      location: "National Head",
      image: "/images/sonu-giri.jpeg",
    },
    {
      name: "Poonam Giri",
      designation: "Vice President",
      location: "National Head",
      image: "/images/poonam-giri.jpeg",
    },
    {
      name: "Sachin Giri",
      designation: "Secretary",
      location: "National Head",
      image: "/images/sachin-giri.jpeg",
    },
    {
      name: "Parvinder Giri",
      designation: "Treasurer",
      location: "National Head",
      image: "/images/parvinder-giri.jpeg",
    },
    {
      name: "Radhika Giri",
      designation: "Manager",
      location: "National Head",
      image: "/images/radhika-giri.jpeg",
    },
  ]

  // State Teams Data
  const stateTeams = {
    "Delhi": [
      {
        image: "/images/rajesh-narwal.jpeg",
        name: "Rajesh Narwal",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/nitish-chunkar.jpeg",
        name: "Nitish Chunkar",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/suresh-kapoor.jpeg",
        name: "Suresh Kapoor",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/yogi-sharma.jpeg",
        name: "Yogi Sharma",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/lata.jpeg",
        name: "Lata",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/harshit-giri.jpeg",
        name: "Harshit Giri",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/pooja.jpeg",
        name: "Pooja",
        designation: "State Coordinator",
        location: "Delhi",
      },
      {
        image: "/images/member1.jpeg",
        name: "Team Member",
        designation: "State Team",
        location: "Delhi",
      },
      {
        image: "/images/member2.jpeg",
        name: "Team Member",
        designation: "State Team",
        location: "Delhi",
      },
    ],
    "Mumbai": [
      {
        image: "/images/sonu-giri.jpeg",
        name: "Mumbai Lead",
        designation: "State Coordinator",
        location: "Mumbai",
      },
      {
        image: "/images/poonam-giri.jpeg",
        name: "Mumbai Team",
        designation: "State Team",
        location: "Mumbai",
      },
    ],
    "Uttar Pradesh": [
      {
        image: "/images/sachin-giri.jpeg",
        name: "UP Lead",
        designation: "State Coordinator",
        location: "Uttar Pradesh",
      },
      {
        image: "/images/parvinder-giri.jpeg",
        name: "UP Team",
        designation: "State Team",
        location: "Uttar Pradesh",
      },
    ],
    "Rajasthan": [
      {
        image: "/images/radhika-giri.jpeg",
        name: "Rajasthan Lead",
        designation: "State Coordinator",
        location: "Rajasthan",
      },
      {
        image: "/images/rajesh-narwal.jpeg",
        name: "Rajasthan Team",
        designation: "State Team",
        location: "Rajasthan",
      },
    ],
    "Punjab": [
      {
        image: "/images/nitish-chunkar.jpeg",
        name: "Punjab Lead",
        designation: "State Coordinator",
        location: "Punjab",
      },
      {
        image: "/images/suresh-kapoor.jpeg",
        name: "Punjab Team",
        designation: "State Team",
        location: "Punjab",
      },
    ],
  }

  // District Teams Data
  const districtTeams = {
    "Gautam Budh Nagar": [
      {
        name: "Yogi Sharma",
        designation: "President",
        location: "Gautam Budh Nagar",
        image: "/images/yogi-sharma.jpeg",
      },
      {
        name: "District Team Member 1",
        designation: "Member",
        location: "Gautam Budh Nagar",
        image: "/images/member1.jpeg",
      },
      {
        name: "District Team Member 2",
        designation: "Member",
        location: "Gautam Budh Nagar",
        image: "/images/member2.jpeg",
      },
    ],
    "Jewar": [
      {
        name: "Sameer Khan",
        designation: "Member",
        location: "Jewar",
        image: "/images/sameer-khan.jpeg",
      },
      {
        name: "Nitish Chunkar",
        designation: "Member",
        location: "Jewar",
        image: "/images/nitish-chunkar.jpeg",
      },
    ],
    "Aligarh": [
      {
        name: "Babu Giri",
        designation: "President Aligarh",
        location: "Aligarh",
        image: "/images/sonu-giri.jpeg",
      },
      {
        name: "Rithik Giri",
        designation: "Member",
        location: "Aligarh",
        image: "/images/poonam-giri.jpeg",
      },
      {
        name: "Prabha Pachori",
        designation: "Member",
        location: "Aligarh",
        image: "/images/sachin-giri.jpeg",
      },
      {
        name: "Udayvir Singh",
        designation: "Member",
        location: "Aligarh",
        image: "/images/parvinder-giri.jpeg",
      },
      {
        name: "Renu Giri",
        designation: "Member",
        location: "Aligarh",
        image: "/images/radhika-giri.jpeg",
      },
    ],
    "Agra": [
      {
        name: "Team Agra",
        designation: "Coming Soon",
        location: "Agra",
        image: "/images/rajesh-narwal.jpeg",
      },
    ],
    "Mathura": [
      {
        name: "Team Mathura",
        designation: "Coming Soon",
        location: "Mathura",
        image: "/images/nitish-chunkar.jpeg",
      },
    ],
    "Firozabad": [
      {
        name: "Team Firozabad",
        designation: "Coming Soon",
        location: "Firozabad",
        image: "/images/suresh-kapoor.jpeg",
      },
    ],
  }

  const TeamCard = ({ member }: any) => (
    <div className="group relative overflow-hidden border border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-60 sm:h-72 overflow-hidden bg-gray-100">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
            <Briefcase size={16} className="text-gray-600 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base truncate">{member.designation}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
            <MapPin size={16} className="text-gray-600 flex-shrink-0" />
            <span className="text-sm sm:text-base truncate">{member.location}</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Main Tabs Component - Now scrollable on mobile
  const MainTabs = () => (
    <div className="relative mb-8">
      {/* Scroll buttons for mobile */}
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      
      <button
        onClick={() => scrollMainTabs('left')}
        className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={() => scrollMainTabs('right')}
        className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={mainTabsRef}
        className="flex overflow-x-auto scrollbar-hide border-b border-gray-200 pb-2 sm:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-nowrap sm:flex-wrap min-w-max sm:min-w-0 px-2 sm:px-0">
          <button
            onClick={() => setActiveTab('national')}
            className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === 'national'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Star size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base">National Leadership</span>
          </button>
          <button
            onClick={() => setActiveTab('state')}
            className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === 'state'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <MapPin size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base">State Teams</span>
          </button>
          <button
            onClick={() => setActiveTab('district')}
            className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === 'district'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Users size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base">District Teams</span>
          </button>
        </div>
      </div>
    </div>
  )

  // State Sub-Tabs Component - Scrollable on mobile
  const StateSubTabs = () => (
    <div className="relative mb-8">
      {/* Scroll buttons for mobile */}
      <button
        onClick={() => scrollStateTabs('left')}
        className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={() => scrollStateTabs('right')}
        className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={stateTabsRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 px-2 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-nowrap gap-2 min-w-max sm:min-w-0">
          {Object.keys(stateTeams).map((state) => (
            <button
              key={state}
              onClick={() => setActiveStateTab(state)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeStateTab === state
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <span className="text-sm sm:text-base">{state}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  // District Sub-Tabs Component - Scrollable on mobile
  const DistrictSubTabs = () => (
    <div className="relative mb-8">
      {/* Scroll buttons for mobile */}
      <button
        onClick={() => scrollDistrictTabs('left')}
        className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={() => scrollDistrictTabs('right')}
        className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 border border-gray-300 rounded-full p-2 z-20 shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={districtTabsRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 px-2 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-nowrap gap-2 min-w-max sm:min-w-0">
          {Object.keys(districtTeams).map((district) => (
            <button
              key={district}
              onClick={() => setActiveDistrictTab(district)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeDistrictTab === district
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <span className="text-sm sm:text-base">{district}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Our <span className="text-black">Leadership</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                Meet the dedicated professionals driving our mission of social impact and community development across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-700 bg-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg shadow-sm min-w-[140px] sm:min-w-0">
                  <Users className="text-gray-600" size={20} />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-black">50+</p>
                    <p className="text-xs sm:text-sm text-gray-600">Core Team Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-700 bg-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg shadow-sm min-w-[140px] sm:min-w-0">
                  <MapPin className="text-gray-600" size={20} />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-black">25+</p>
                    <p className="text-xs sm:text-sm text-gray-600">States & UTs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-700 bg-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg shadow-sm min-w-[140px] sm:min-w-0">
                  <Star className="text-gray-600" size={20} />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-black">100+</p>
                    <p className="text-xs sm:text-sm text-gray-600">Programs Executed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Tabs Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MainTabs />
            
            {/* National Tab Content */}
            {activeTab === 'national' && (
              <div className="space-y-8 sm:space-y-12 animate-fade-in">
                <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    National Leadership Team
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Our core leadership team guiding the foundation's strategic vision and national operations.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
                  {nationalTeam.map((member, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <TeamCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* State Tab Content */}
            {activeTab === 'state' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="text-center mb-6 sm:mb-8 px-2 sm:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    State Operations Teams
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Our state-level teams implementing programs and initiatives at the regional level.
                  </p>
                </div>
                
                <StateSubTabs />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {stateTeams[activeStateTab as keyof typeof stateTeams].map((member, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <TeamCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* District Tab Content */}
            {activeTab === 'district' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="text-center mb-6 sm:mb-8 px-2 sm:px-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    District Teams
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Our ground-level teams ensuring effective implementation in local communities.
                  </p>
                </div>
                
                <DistrictSubTabs />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {districtTeams[activeDistrictTab as keyof typeof districtTeams].map((member, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <TeamCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Structure</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A well-organized hierarchy ensuring efficient operations at every level
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">National Leadership</h3>
                <p className="text-gray-600 mb-4">5 Core Members</p>
                <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                  <p>Strategic Vision & Guidance</p>
                  <p>National Operations</p>
                </div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">State Teams</h3>
                <p className="text-gray-600 mb-4">{Object.keys(stateTeams).length} Active States</p>
                <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                  <p>Regional Implementation</p>
                  <p>State-level Programs</p>
                </div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">District Teams</h3>
                <p className="text-gray-600 mb-4">{Object.keys(districtTeams).length} Active Districts</p>
                <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                  <p>Community Engagement</p>
                  <p>Local Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Join Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                We're looking for passionate individuals to join our team and help create lasting change in communities across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="mailto:careers@aapkasahyog.org"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <Mail size={18} />
                  <span className="text-sm sm:text-base">Contact Us</span>
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone size={18} />
                  <span className="text-sm sm:text-base">Schedule a Call</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8">
                Email: careers@aapkasahyog.org | Phone: +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @media (max-width: 640px) {
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}