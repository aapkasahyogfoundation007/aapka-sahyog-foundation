"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Download, Shield, Heart, Users, TreePine, BriefcaseMedical } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="w-full bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-fade-in rounded-lg overflow-hidden h-48 sm:h-64 md:h-80">
              <Image
                src="/images/banner.png"
                alt="Aapka Sahyog Foundation Banner"
                width={1200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div
            className={`space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold">आपका सहयोग फाउंडेशन</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              एक सामाजिक सेवा संगठन जो समाज में सकारात्मक परिवर्तन लाने के उद्देश्य से लगातार धरातल पर कार्य कर रहा है।
            </p>
          </div>
        </section>

        {/* Hindi Introduction Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">संस्था प्रोफ़ाइल</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
                आपका सहयोग फाउंडेशन एक सामाजिक सेवा संगठन है, जो समाज में सकारात्मक परिवर्तन लाने के उद्देश्य से 
                लगातार धरातल पर कार्य कर रहा है। संस्था का लक्ष्य है—हर वर्ग तक सहायता, सुरक्षा और जागरूकता पहुँचाना, 
                चाहे वह महिलाएँ हों, बच्चे हों या बुजुर्ग।
              </p>
            </div>

            {/* Mission in Hindi */}
            <div className="bg-secondary border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bold text-center">हमारा उद्देश्य</h3>
              <p className="text-lg text-center text-muted-foreground italic max-w-3xl mx-auto">
                "समाज के हर व्यक्ति को सहायता, सुरक्षा और सम्मान उपलब्ध कराना।"
              </p>
              <p className="text-center text-muted-foreground">
                आपका सहयोग फाउंडेशन एक ऐसी पहल है, जो समाज के कमजोर वर्गों के लिए मजबूत सहारा बनने का कार्य कर रही है।
              </p>
            </div>
          </div>
        </section>

        {/* Work Areas in Hindi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">हमारे प्रमुख कार्यक्षेत्र</h2>
              <p className="text-muted-foreground">समाज के विभिन्न क्षेत्रों में हमारी सक्रिय भूमिका</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hindiSections.map((section, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up bg-secondary border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-foreground/10 rounded-lg">
                        <section.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-lg font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
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

        {/* Commitment Section in Hindi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-secondary border border-border rounded-lg p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">हमारी प्रतिबद्धता</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                हम समाज सेवा के क्षेत्र में इन मूल्यों के साथ कार्य करने के लिए प्रतिबद्ध हैं
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {commitments.map((commitment, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up px-6 py-3 bg-background border border-border rounded-full hover:bg-background/90 transition-all duration-300"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="font-semibold">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us in Hindi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-foreground text-background rounded-lg p-8 md:p-12 space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">हमसे जुड़ें</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              यदि आप भी समाज सेवा के इस अभियान का हिस्सा बनना चाहते हैं या किसी सहायता की आवश्यकता है, 
              तो आपका सहयोग फाउंडेशन सदैव आपके साथ खड़ा है।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors">
                स्वयंसेवक बनें
              </button>
              <button className="px-6 py-3 border border-background text-background rounded-lg font-semibold hover:bg-background/10 transition-colors">
                सहयोग दें
              </button>
              <button className="px-6 py-3 border border-background text-background rounded-lg font-semibold hover:bg-background/10 transition-colors">
                सहायता लें
              </button>
            </div>
          </div>
        </section>

        {/* PDF Preview Section with Increased Height and Half Width */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="text-center space-y-4 mb-8 w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold">Foundation ByLaws</h2>
              <p className="text-muted-foreground">
                Official constitution and governing rules of Aapka Sahyog Foundation
              </p>
              <div className="flex justify-center">
                <a
                  href="/documents/laws.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-muted-foreground transition-colors duration-200"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </div>

            {/* PDF Preview with Increased Height and Half Width */}
            <div className="animate-fade-in-up bg-secondary border border-border rounded-lg overflow-hidden shadow-sm w-full md:w-1/2">
              <div className="h-[500px] md:h-[600px] w-full">
                <iframe
                  src="/documents/laws.pdf#view=fitH"
                  className="w-full h-full"
                  title="Aapka Sahyog Foundation ByLaws"
                />
              </div>
              <div className="p-4 border-t border-border bg-background text-center text-sm text-muted-foreground">
                <p>Scroll to navigate through the document | Use browser controls to zoom or print</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo and Registration */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-in-left">
              <img src="/images/asf-logo.png" alt="Aapka Sahyog Foundation Logo" className="w-full max-w-xs h-auto mx-auto" />
            </div>
            <div className="animate-slide-in-right space-y-5">
              <h2 className="text-2xl font-bold">Our Foundation</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Aapka Sahyog Foundation (ASF) is committed to bridging the gap between privileged and underprivileged
                  sections of society through targeted interventions in education, health, environment, and livelihood.
                </p>
                <div className="bg-secondary p-6 rounded-lg space-y-3 border border-border">
                  <div>
                    <p className="font-bold text-base mb-1">Registration Details</p>
                    <p className="text-muted-foreground text-sm">Regd. No. 49/2025/Jewar</p>
                  </div>
                  <div>
                    <p className="font-semibold text-base mb-1">Payment Methods</p>
                    <p className="text-muted-foreground text-sm">UPI: 9999767640m@pnb</p>
                  </div>
                  <div>
                    <p className="font-semibold text-base mb-1">Helpdesk</p>
                    <p className="text-muted-foreground text-sm">18001800 / 18002021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in-up p-6 border border-border rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To create a sustainable, equitable society by empowering individuals and communities through education,
                skill development, environmental protection, and social welfare initiatives that promote dignity and
                self-reliance.
              </p>
            </div>
            <div
              className="animate-fade-in-up p-6 border border-border rounded-lg hover:shadow-lg transition-all"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A world where every individual has access to quality education, healthcare, and livelihood
                opportunities, living in harmony with nature and contributing meaningfully to society regardless of
                their socio-economic background.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Core Values</h2>
              <p className="text-muted-foreground text-sm">Guiding principles that shape our work and impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up flex items-center gap-3 p-4 border border-border rounded-lg hover:border-foreground transition-colors duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span className="font-semibold text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-secondary rounded-lg">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Governance & Structure</h2>
              <p className="text-muted-foreground text-sm">How we operate and maintain our commitment to communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governance.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up p-6 bg-background border border-border rounded-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}