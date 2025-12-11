"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, MapPin, Briefcase, Mail, Phone, Star } from "lucide-react"
import { useState } from "react"

export default function Team() {
  // State for main tabs
  const [activeTab, setActiveTab] = useState<'national' | 'state' | 'district'>('national')
  
  // State for sub-tabs
  const [activeStateTab, setActiveStateTab] = useState('Delhi')
  const [activeDistrictTab, setActiveDistrictTab] = useState('Gautam Budh Nagar')

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
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <Briefcase size={18} className="text-gray-600" />
            <span className="font-medium">{member.designation}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={18} className="text-gray-600" />
            <span>{member.location}</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Main Tabs Component
  const MainTabs = () => (
    <div className="flex border-b border-gray-200 mb-8">
      <button
        onClick={() => setActiveTab('national')}
        className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 ${activeTab === 'national'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-600 hover:text-gray-900'
          }`}
      >
        <Star size={20} />
        National Leadership
      </button>
      <button
        onClick={() => setActiveTab('state')}
        className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 ${activeTab === 'state'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-600 hover:text-gray-900'
          }`}
      >
        <MapPin size={20} />
        State Teams
      </button>
      <button
        onClick={() => setActiveTab('district')}
        className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 ${activeTab === 'district'
            ? 'text-black border-b-2 border-black'
            : 'text-gray-600 hover:text-gray-900'
          }`}
      >
        <Users size={20} />
        District Teams
      </button>
    </div>
  )

  // State Sub-Tabs Component
  const StateSubTabs = () => (
    <div className="flex flex-wrap gap-2 mb-8">
      {Object.keys(stateTeams).map((state) => (
        <button
          key={state}
          onClick={() => setActiveStateTab(state)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeStateTab === state
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {state}
        </button>
      ))}
    </div>
  )

  // District Sub-Tabs Component
  const DistrictSubTabs = () => (
    <div className="flex flex-wrap gap-2 mb-8">
      {Object.keys(districtTeams).map((district) => (
        <button
          key={district}
          onClick={() => setActiveDistrictTab(district)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeDistrictTab === district
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {district}
        </button>
      ))}
    </div>
  )

  // Active State Hero Image
  const StateHeroImage = () => {
    const activeStateTeam = stateTeams[activeStateTab as keyof typeof stateTeams]
    const leadMember = activeStateTeam[0]
    
    return (
      <div className="relative mb-8 rounded-xl overflow-hidden">
        {/* <div className="relative h-64 md:h-80">
          <img
            src={leadMember.image || "/placeholder.svg"}
            alt={leadMember.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeStateTab} Team</h3>
            <p className="text-lg opacity-90">{activeStateTeam.length} Active Members</p>
          </div>
        </div> */}
      </div>
    )
  }

  // Active District Hero Image
  const DistrictHeroImage = () => {
    const activeDistrictTeam = districtTeams[activeDistrictTab as keyof typeof districtTeams]
    const leadMember = activeDistrictTeam[0]
    
    return (
      <div className="relative mb-8 rounded-xl overflow-hidden">
        {/* <div className="relative h-64 md:h-80">
          <img
            src={leadMember.image || "/placeholder.svg"}
            alt={leadMember.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeDistrictTab} District</h3>
            <p className="text-lg opacity-90">{activeDistrictTeam.length} Active Members</p>
          </div>
        </div> */}
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Simplified without banner */}
        <section className="relative bg-gradient-to-r from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Our <span className="text-black">Leadership</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals driving our mission of social impact and community development across India.
              </p>
              <div className="flex flex-wrap justify-center gap-8 pt-6">
                <div className="flex items-center gap-3 text-gray-700 bg-white px-6 py-3 rounded-lg shadow-sm">
                  <Users className="text-gray-600" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-black">50+</p>
                    <p className="text-sm text-gray-600">Core Team Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-white px-6 py-3 rounded-lg shadow-sm">
                  <MapPin className="text-gray-600" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-black">25+</p>
                    <p className="text-sm text-gray-600">States & UTs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 bg-white px-6 py-3 rounded-lg shadow-sm">
                  <Star className="text-gray-600" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-black">100+</p>
                    <p className="text-sm text-gray-600">Programs Executed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Tabs Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MainTabs />
            
            {/* National Tab Content */}
            {activeTab === 'national' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    National Leadership Team
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our core leadership team guiding the foundation's strategic vision and national operations.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    State Operations Teams
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our state-level teams implementing programs and initiatives at the regional level.
                  </p>
                </div>
                
                <StateSubTabs />
                <StateHeroImage />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    District Teams
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our ground-level teams ensuring effective implementation in local communities.
                  </p>
                </div>
                
                <DistrictSubTabs />
                <DistrictHeroImage />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Structure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A well-organized hierarchy ensuring efficient operations at every level
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">National Leadership</h3>
                <p className="text-gray-600 mb-4">5 Core Members</p>
                <div className="text-sm text-gray-500">
                  <p>Strategic Vision & Guidance</p>
                  <p>National Operations</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">State Teams</h3>
                <p className="text-gray-600 mb-4">{Object.keys(stateTeams).length} Active States</p>
                <div className="text-sm text-gray-500">
                  <p>Regional Implementation</p>
                  <p>State-level Programs</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">District Teams</h3>
                <p className="text-gray-600 mb-4">{Object.keys(districtTeams).length} Active Districts</p>
                <div className="text-sm text-gray-500">
                  <p>Community Engagement</p>
                  <p>Local Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-white rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're looking for passionate individuals to join our team and help create lasting change in communities across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:careers@aapkasahyog.org"
                  className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Mail size={20} />
                  Contact Us
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Phone size={20} />
                  Schedule a Call
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-8">
                Email: careers@aapkasahyog.org | Phone: +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}