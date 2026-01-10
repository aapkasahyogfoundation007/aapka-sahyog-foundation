"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Shield, Heart, Users, TreePine, BriefcaseMedical, ChevronLeft, ChevronRight, FileText, BookOpen, Calendar, Edit } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [bylawsText, setBylawsText] = useState<string>("")
  const [bylawsImage, setBylawsImage] = useState<string>("")
  const [loadingBylaws, setLoadingBylaws] = useState(true)
  const imagesPerPage = 6

  useEffect(() => {
    setIsLoaded(true)
    // Load bylaws data from API or Firebase
    loadBylawsData()
  }, [])

  const loadBylawsData = async () => {
    try {
      setLoadingBylaws(true)
      // Fetch bylaws data from your backend
      // const response = await fetch('/api/about/bylaws')
      // const data = await response.json()
      // setBylawsText(data.text)
      // setBylawsImage(data.image)
      
      // For now, use placeholder data
      setBylawsText(`
        **आपका सहयोग फाउंडेशन संविधान एवं नियमावली**

        **अनुच्छेद 1: संगठन का नाम**
        संगठन का नाम "आपका सहयोग फाउंडेशन" होगा, जिसे संक्षेप में "ए.एस.एफ." कहा जाएगा।

        **अनुच्छेद 2: मुख्य उद्देश्य**
        1. समाज के कमजोर वर्गों को सहायता प्रदान करना
        2. महिला सशक्तिकरण एवं बाल संरक्षण
        3. पर्यावरण संरक्षण एवं स्वच्छता अभियान
        4. निःशुल्क शिक्षा एवं स्वास्थ्य सेवाएं प्रदान करना
        5. सामाजिक न्याय एवं समानता को बढ़ावा देना

        **अनुच्छेद 3: सदस्यता**
        1. 18 वर्ष से अधिक आयु का कोई भी व्यक्ति सदस्य बन सकता है
        2. सदस्यता फॉर्म भरकर एवं आवश्यक दस्तावेज जमा करके
        3. सदस्यता निर्धारित नियमों के अधीन होगी

        **अनुच्छेद 4: प्रबंधन समिति**
        1. कार्यकारी समिति में अध्यक्ष, सचिव, कोषाध्यक्ष एवं 4 सदस्य होंगे
        2. समिति का चुनाव प्रति 3 वर्ष में आम सभा द्वारा किया जाएगा
        3. समिति की बैठक प्रति माह कम से कम एक बार आयोजित की जाएगी

        **अनुच्छेद 5: वित्तीय व्यवस्था**
        1. सभी दान रसीदों के साथ स्वीकार किए जाएंगे
        2. वार्षिक लेखा परीक्षा अनिवार्य होगी
        3. सभी वित्तीय लेन-देन बैंक खाते के माध्यम से किए जाएंगे

        **अनुच्छेद 6: सामान्य सभा**
        1. वार्षिक सामान्य सभा प्रत्येक वर्ष मार्च माह में आयोजित की जाएगी
        2. विशेष सामान्य सभा आवश्यकता पड़ने पर बुलाई जा सकेगी
        3. सभी निर्णय बहुमत से लिए जाएंगे

        **अनुच्छेद 7: संशोधन**
        इस संविधान में संशोधन सामान्य सभा के दो-तिहाई बहुमत से किया जा सकेगा।

        **नोट:** यह संविधान सोसायटी पंजीकरण अधिनियम, 1860 के अंतर्गत पंजीकृत है।
      `)
      setBylawsImage("/images/bylaws-placeholder.jpg") // Optional image
    } catch (error) {
      console.error("Error loading bylaws:", error)
    } finally {
      setLoadingBylaws(false)
    }
  }

  // Gallery images
  const galleryImages = [
    { src: "/donation1.jpeg", alt: "Donation Camp 1", category: "Donation" },
    { src: "/donation2.jpeg", alt: "Donation Camp 2", category: "Donation" },
    { src: "/donation3.jpeg", alt: "Donation Camp 3", category: "Donation" },
    { src: "/donation4.jpeg", alt: "Donation Camp 4", category: "Donation" },
    { src: "/donation5.jpeg", alt: "Community donation 1", category: "Community" },
    { src: "/donation6.jpeg", alt: "Community donation 2", category: "Community" },
    { src: "/donation7.jpeg", alt: "Community donation 3", category: "Community" },
    { src: "/donation8.jpeg", alt: "Community donation 4", category: "Community" },
    { src: "/donation9.jpeg", alt: "Medical Camp 1", category: "Medical" },
    { src: "/donation10.jpeg", alt: "Environmental donation", category: "Environment" },
    { src: "/donation12.jpeg", alt: "Women Empowerment Program", category: "Empowerment" },
    { src: "/donation13.jpeg", alt: "Women Empowerment Program", category: "Empowerment" },
    { src: "/donation14.jpeg", alt: "Women Empowerment Program", category: "Empowerment" },
  ]

  const values = [
    "Community Empowerment",
    "Environmental Sustainability",
    "Social Equality",
    "Transparent Operations",
    "Impact-Driven Approach",
    "Inclusive Development",
  ]

  const governance = [
    {
      title: "Leadership",
      description: "Experienced team dedicated to social impact and community welfare with diverse expertise",
    },
    {
      title: "Transparency",
      description:
        "All operations are conducted with full transparency, accountability, and adherence to regulatory standards",
    },
    {
      title: "Accountability",
      description: "Regular reporting and audits ensure proper utilization of resources and funds",
    },
    {
      title: "Partnerships",
      description: "Collaborations with government bodies, NGOs, and corporate sectors for greater impact",
    },
  ]

  // Hindi Information Sections
  const hindiSections = [
    {
      icon: Shield,
      title: "महिलाओं, बच्चों और बुजुर्गों की सुरक्षा",
      points: [
        "घरेलू हिंसा, अत्याचार या किसी भी प्रकार की प्रताड़ना की स्थिति में तुरंत सहायता प्रदान करना",
        "कानूनी परामर्श, मनोवैज्ञानिक सहयोग और पुनर्वास में मदद",
        "महिलाओं के अधिकारों और सुरक्षा के लिए जागरूकता अभियान"
      ]
    },
    {
      icon: Users,
      title: "कॉलोनी एवं समाज की समस्याओं का समाधान",
      points: [
        "सफाई व्यवस्था में सुधार के लिए स्थानीय प्रशासन के साथ समन्वय",
        "जल, पर्यावरण और सार्वजनिक सुविधाओं से जुड़ी शिकायतों का समाधान",
        "स्वस्थ और स्वच्छ समाज बनाने के लिए जन-जागरूकता अभियान"
      ]
    },
    {
      icon: Heart,
      title: "महिलाओं को आत्मनिर्भर बनाने के प्रयास",
      points: [
        "सिलाई, क्राफ्ट, स्किल डेवलपमेंट और माइक्रो बिज़नेस ट्रेनिंग",
        "छोटे व्यवसाय शुरू करने में सहयोग",
        "आर्थिक स्वतंत्रता की दिशा में महिलाओं को सशक्त बनाना"
      ]
    },
    {
      icon: TreePine,
      title: "पर्यावरण संरक्षण गतिविधियाँ",
      points: [
        "पौधारोपण अभियानों का आयोजन",
        "पानी बचाओ, प्लास्टिक मुक्त समाज जैसे अभियानों में सक्रिय सहभागिता",
        "युवाओं को प्रकृति संरक्षण के प्रति जागरूक करना"
      ]
    },
    {
      icon: BriefcaseMedical,
      title: "स्वास्थ्य संबंधित कैम्प",
      points: [
        "नियमित मेडिकल जांच कैंप का आयोजन",
        "योग और स्वास्थ्य प्रशिक्षण शिविर",
        "सामुदायिक स्वास्थ्य जागरूकता कार्यक्रम"
      ]
    }
  ]

  const commitments = [
    "पारदर्शिता",
    "जिम्मेदारी",
    "मानवीय संवेदना",
    "त्वरित सहायता"
  ]

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage)
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Format bylaws text with HTML
  const formatBylawsText = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
        return <h3 key={index} className="text-lg font-bold text-primary mt-4 mb-2">{line.replace(/\*\*/g, '')}</h3>
      } else if (line.trim().match(/^\d+\./)) {
        return <p key={index} className="ml-4 mb-1">{line}</p>
      } else if (line.trim() === '') {
        return <br key={index} />
      } else {
        return <p key={index} className="mb-2">{line}</p>
      }
    })
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Responsive Banner */}
        <section className="w-full bg-secondary">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 md:py-8">
            <div className="animate-fade-in rounded-lg overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80">
              <Image
                src="/images/banner.png"
                alt="Aapka Sahyog Foundation Banner"
                width={1200}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Header - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 md:py-12">
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">आपका सहयोग फाउंडेशन</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
              एक सामाजिक सेवा संगठन जो समाज में सकारात्मक परिवर्तन लाने के उद्देश्य से लगातार धरातल पर कार्य कर रहा है।
            </p>
          </div>
        </section>

        {/* Hindi Introduction Section - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">संस्था प्रोफ़ाइल</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
                आपका सहयोग फाउंडेशन एक सामाजिक सेवा संगठन है, जो समाज में सकारात्मक परिवर्तन लाने के उद्देश्य से 
                लगातार धरातल पर कार्य कर रहा है। संस्था का लक्ष्य है—हर वर्ग तक सहायता, सुरक्षा और जागरूकता पहुँचाना, 
                चाहे वह महिलाएँ हों, बच्चे हों या बुजुर्ग।
              </p>
            </div>

            {/* Mission in Hindi */}
            <div className="bg-secondary border border-border rounded-lg p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-center">हमारा उद्देश्य</h3>
              <p className="text-base sm:text-lg text-center text-muted-foreground italic max-w-3xl mx-auto">
                "समाज के हर व्यक्ति को सहायता, सुरक्षा और सम्मान उपलब्ध कराना।"
              </p>
              <p className="text-center text-sm sm:text-base text-muted-foreground">
                आपका सहयोग फाउंडेशन एक ऐसी पहल है, जो समाज के कमजोर वर्गों के लिए मजबूत सहारा बनने का कार्य कर रही है।
              </p>
            </div>
          </div>
        </section>

        {/* Work Areas in Hindi - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="space-y-8 md:space-y-10">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">हमारे प्रमुख कार्यक्षेत्र</h2>
              <p className="text-sm sm:text-base text-muted-foreground">समाज के विभिन्न क्षेत्रों में हमारी सक्रिय भूमिका</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {hindiSections.map((section, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up bg-secondary border border-border rounded-lg p-4 sm:p-5 md:p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1 sm:p-2 bg-foreground/10 rounded-lg">
                        <section.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground" />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-1 sm:space-y-2 pl-1">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-foreground mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section in Hindi - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="bg-secondary border border-border rounded-lg p-4 sm:p-6 md:p-8">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">हमारी प्रतिबद्धता</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                हम समाज सेवा के क्षेत्र में इन मूल्यों के साथ कार्य करने के लिए प्रतिबद्ध हैं
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {commitments.map((commitment, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-background border border-border rounded-full"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Clean Design without Hover Effects */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="space-y-8 md:space-y-10">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">हमारा कार्य एवं दान गतिविधियाँ</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
                समाज सेवा के क्षेत्र में हमारी विभिन्न गतिविधियों और सफलताओं की झलक
              </p>
            </div>

            {/* Gallery Grid - Simple and Clean */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-secondary border border-border rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index + indexOfFirstImage)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  
                  {/* Info Box - Always Visible */}
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {image.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        #{index + 1 + indexOfFirstImage}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls - Responsive */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 md:mt-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-sm ${
                    currentPage === 1
                      ? "border-border text-muted-foreground cursor-not-allowed"
                      : "border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  <ChevronLeft size={16} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Previous</span>
                </button>
                
                <div className="flex items-center gap-1 sm:gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm ${
                        currentPage === index + 1
                          ? "bg-primary text-primary-foreground"
                          : "border border-border hover:border-primary"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-sm ${
                    currentPage === totalPages
                      ? "border-border text-muted-foreground cursor-not-allowed"
                      : "border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  <span className="hidden xs:inline">Next</span>
                  <ChevronRight size={16} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            )}

            {/* Page Info */}
            <div className="text-center text-xs sm:text-sm text-muted-foreground">
              <p>Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} photos</p>
            </div>
          </div>
        </section>

        {/* Beautiful Bylaws Section - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="inline-flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/10 rounded-full mb-2">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Foundation Bylaws & Constitution</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Official governing document outlining our principles, structure, and operational guidelines
              </p>
            </div>

            {/* Bylaws Container */}
            <div className="animate-fade-in-up transition-all duration-300">
              <div className="bg-gradient-to-br from-background via-secondary/50 to-background border border-border rounded-2xl overflow-hidden shadow-xl">
                {/* Bylaws Header */}
                <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-4 sm:p-6 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">Aapka Sahyog Foundation Bylaws</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Official Document • Version 1.0 • Last Updated: 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 sm:gap-2 bg-background border border-border rounded-lg px-3 py-1.5">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm text-muted-foreground">Registered: 2024</span>
                    </div>
                  </div>
                </div>

                {/* Bylaws Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Text Content - Takes 2/3 on large screens */}
                    <div className="lg:col-span-2">
                      {loadingBylaws ? (
                        <div className="space-y-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          ))}
                        </div>
                      ) : (
                        <div className="prose prose-sm sm:prose-base max-w-none">
                          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-gray-700">
                            {formatBylawsText(bylawsText)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image Section - Takes 1/3 on large screens */}
                    <div className="space-y-4">
                      <div className="bg-secondary/30 border border-border rounded-lg p-4">
                        <h4 className="font-bold text-sm sm:text-base mb-2">Document Information</h4>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Registered under Societies Act, 1860</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Registration No: 49/2025/Jewar</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            <span>Annual Audits Conducted</span>
                          </div>
                        </div>
                      </div>

                      {/* Bylaws Image - Optional */}
                      {bylawsImage && (
                        <div className="border border-border rounded-lg overflow-hidden">
                          <div className="relative h-48 sm:h-56 w-full bg-gray-100">
                            <Image
                              src={bylawsImage}
                              alt="Bylaws Document"
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                          </div>
                          <div className="p-3 bg-secondary/30">
                            <p className="text-xs sm:text-sm text-center text-muted-foreground">
                              Official Bylaws Document
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bylaws Footer */}
                <div className="bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30 p-3 sm:p-4 border-t border-border">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      <span className="font-medium">Note:</span> This document is governed by Indian Laws and Regulations
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Legal Document</span>
                      </div>
                      <span>•</span>
                      <span>Publicly Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-secondary border border-border rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Legal Compliance</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Registered under the Societies Registration Act, 1860. All operations follow regulatory standards.
                </p>
              </div>
              
              <div className="bg-secondary border border-border rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Governing Body</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Managed by a dedicated board of trustees and experienced committee members.
                </p>
              </div>
              
              <div className="bg-secondary border border-border rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Transparency</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Annual reports and financial statements available upon request. We believe in open governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us in Hindi - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="bg-foreground text-background rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">हमसे जुड़ें</h2>
            <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto px-2">
              यदि आप भी समाज सेवा के इस अभियान का हिस्सा बनना चाहते हैं या किसी सहायता की आवश्यकता है, 
              तो आपका सहयोग फाउंडेशन सदैव आपके साथ खड़ा है।
            </p>
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-background text-foreground rounded-lg font-semibold text-sm sm:text-base hover:bg-secondary transition-colors">
                स्वयंसेवक बनें
              </button>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border border-background text-background rounded-lg font-semibold text-sm sm:text-base hover:bg-background/10 transition-colors">
                सहयोग दें
              </button>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border border-background text-background rounded-lg font-semibold text-sm sm:text-base hover:bg-background/10 transition-colors">
                सहायता लें
              </button>
            </div>
          </div>
        </section>

        {/* Logo and Registration - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="animate-slide-in-left flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <Image
                  src="/images/asf-logo.png"
                  alt="Aapka Sahyog Foundation Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="animate-slide-in-right space-y-4 sm:space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold">Our Foundation</h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Aapka Sahyog Foundation (ASF) is committed to bridging the gap between privileged and underprivileged
                  sections of society through targeted interventions in education, health, environment, and livelihood.
                </p>
                <div className="bg-secondary p-4 sm:p-5 md:p-6 rounded-lg space-y-2 sm:space-y-3 border border-border">
                  <div>
                    <p className="font-bold text-sm sm:text-base mb-1">Registration Details</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Regd. No. 49/2025/Jewar</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Payment Methods</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">UPI: 9999767640m@pnb</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Helpdesk</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">18001800 / 18002021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="animate-fade-in-up p-4 sm:p-5 md:p-6 border border-border rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To create a sustainable, equitable society by empowering individuals and communities through education,
                skill development, environmental protection, and social welfare initiatives that promote dignity and
                self-reliance.
              </p>
            </div>
            <div
              className="animate-fade-in-up p-4 sm:p-5 md:p-6 border border-border rounded-lg"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A world where every individual has access to quality education, healthcare, and livelihood
                opportunities, living in harmony with nature and contributing meaningfully to society regardless of
                their socio-economic background.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16">
          <div className="space-y-8 md:space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Our Core Values</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Guiding principles that shape our work and impact</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border border-border rounded-lg"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance - Responsive */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16 bg-secondary rounded-lg">
          <div className="space-y-8 md:space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Governance & Structure</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">How we operate and maintain our commitment to communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {governance.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up p-4 sm:p-5 md:p-6 bg-background border border-border rounded-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal - Responsive */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-[90vh] w-full sm:max-w-4xl">
              <button
                className="absolute -top-10 right-0 sm:-right-10 sm:top-0 text-white hover:text-primary transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <div className="bg-black/50 p-2 rounded-full">
                  <ChevronLeft className="rotate-90 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </button>
              
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="bg-black/70 backdrop-blur-sm p-3 sm:p-4 mt-2 sm:mt-4 rounded-lg">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  {galleryImages[selectedImage].alt}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  Image {selectedImage + 1} of {galleryImages.length}
                </p>
                <div className="flex items-center justify-between mt-3 sm:mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (selectedImage > 0) setSelectedImage(selectedImage - 1)
                    }}
                    disabled={selectedImage === 0}
                    className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 text-xs sm:text-sm"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                    Previous
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (selectedImage < galleryImages.length - 1) setSelectedImage(selectedImage + 1)
                    }}
                    disabled={selectedImage === galleryImages.length - 1}
                    className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 text-xs sm:text-sm"
                  >
                    Next
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}