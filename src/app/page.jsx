"use client"
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown, BookOpen, Users, Award, Calendar, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', class: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">ST Boston EdTech</h1>
                <p className="text-xs text-red-600 font-semibold tracking-wider uppercase">CBSE Board • Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'academics', 'admission', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors relative group ${
                    activeSection === item ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {item === 'about' ? 'About Us' : item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${activeSection === item ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-gray-100 animate-fade-in-down">
              {['home', 'about', 'academics', 'admission', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium capitalize border-l-4 border-transparent hover:border-red-600 transition-all"
                >
                  {item === 'about' ? 'About Us' : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-orange-600 opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                <span className="font-bold text-yellow-300">Admissions Open</span> for 2025-2026
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Shaping Future <br/>
                <span className="text-yellow-300">Leaders</span>
              </h2>
              <p className="text-xl text-red-50 leading-relaxed max-w-lg">
                Empowering young minds from <span className="font-bold text-white">Class 1st to 9th</span> with CBSE curriculum, innovative teaching, and holistic development.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('admission')}
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative hidden md:block animate-fade-in-left">
              <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src="/image/first.png"
                  alt="Students Learning"
                  className="w-full h-[500px] object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-red-900 px-6 py-4 rounded-xl font-bold shadow-lg flex items-center gap-3">
                  <Star className="fill-red-900" />
                  <span>CBSE Board Affiliated</span>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-full h-full bg-red-900/20 rounded-3xl -z-10 transform -rotate-3"></div>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">About Our School</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Managing Director Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 transform hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-4 bg-red-600 relative min-h-[300px] md:min-h-full">
                 <img
                  src="/image/md.png" 
                  alt="Maya Mishra - Managing Director"
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide image if fails, show background
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center bg-red-600/80">
                  <div className="w-32 h-32 bg-white/20 rounded-full mb-6 flex items-center justify-center backdrop-blur-sm border-2 border-white/50">
                    <Users size={48} />
                  </div>
                  <h3 className="text-2xl font-bold">Maya Mishra</h3>
                  <p className="text-red-100 font-medium uppercase tracking-widest text-sm mt-2">Managing Director</p>
                </div>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Director's Message</h3>
                <p className="text-gray-600 text-lg leading-relaxed italic mb-6">
                  "Welcome to ST Boston EdTech. Our vision is to create a learning environment where every child feels valued and inspired to achieve their best. We believe in nurturing not just academic excellence, but also the character and values that will guide our students throughout their lives. With our dedicated team and modern facilities, we are committed to shaping the leaders of tomorrow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="font-signature text-2xl text-red-600">Maya Mishra</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At ST Boston EdTech School, we are committed to providing exceptional education for students from <span className="font-bold text-red-600">Class 1st to 9th</span>. Our mission is to nurture curious minds, foster creativity, and build strong foundations in academics, character, and life skills.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe in holistic development where every child discovers their unique potential through innovative teaching methods, technology integration, and personalized attention in a safe and supportive environment.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-600">
                  <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-500 font-medium">Happy Students</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-400">
                  <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-gray-500 font-medium">Expert Teachers</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-red-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <img
                src="/image/second.png"
                alt="School Building"
                className="rounded-3xl shadow-2xl w-full relative z-10 transform -rotate-2 hover:rotate-0 transition-all duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                }}
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-24">
            {[
              { icon: BookOpen, title: 'CBSE Curriculum', desc: 'Standardized curriculum ensuring national level competitiveness' },
              { icon: Users, title: 'Expert Faculty', desc: 'Qualified teachers dedicated to student success' },
              { icon: Award, title: 'Holistic Growth', desc: 'Focus on sports, arts, and character building' },
              { icon: Calendar, title: 'Modern Campus', desc: 'Tech-enabled classrooms and safe environment' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <feature.icon className="text-red-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Academic Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Programs</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from Class 1st to 9th designed to foster intellectual curiosity and academic achievement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                level: 'Primary Wing',
                classes: 'Classes 1st - 5th',
                subjects: ['English', 'Mathematics', 'EVS', 'Hindi', 'Computer Basics', 'Arts', 'Physical Education'],
                color: 'bg-blue-50 border-blue-200',
                iconColor: 'text-blue-600'
              },
              {
                level: 'Middle Wing',
                classes: 'Classes 6th - 8th',
                subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Third Language', 'Sports'],
                color: 'bg-red-50 border-red-200',
                iconColor: 'text-red-600'
              },
              {
                level: 'High School',
                classes: 'Class 9th',
                subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Information Technology', 'Lab Activities', 'Career Guidance'],
                color: 'bg-green-50 border-green-200',
                iconColor: 'text-green-600'
              }
            ].map((section, index) => (
              <div key={index} className={`rounded-3xl p-8 border-2 ${section.color} hover:shadow-xl transition-all duration-300`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{section.level}</h3>
                  <p className={`text-lg font-semibold ${section.iconColor} mt-1`}>{section.classes}</p>
                </div>
                <ul className="space-y-4">
                  {section.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className={`${section.iconColor} mr-3 flex-shrink-0`} size={18} />
                      <span className="text-gray-700 font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Learning Approach */}
          <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden text-white">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-8">Why Choose ST Boston?</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">Interactive Learning</h4>
                    <p className="text-gray-300">
                      Smart classrooms and digital tools make learning immersive and easier to grasp.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">Individual Attention</h4>
                    <p className="text-gray-300">
                      Optimized student-teacher ratio ensures every child gets the guidance they need.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">Safe Environment</h4>
                    <p className="text-gray-300">
                      CCTV surveillance and secure campus for your child's safety and your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/image/third.png" 
                  alt="Interactive Learning" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-yellow-400 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open</h2>
            <p className="text-2xl text-red-100 font-light">
              Academic Session <span className="font-bold text-yellow-300">2025-2026</span>
            </p>
            <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
              Join our vibrant learning community. Admissions are open for Classes 1st to 9th.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="mr-3" /> Admission Process
              </h3>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Registration', desc: 'Fill the enquiry form or visit school office.' },
                  { step: '02', title: 'Interaction', desc: 'Student interaction and document verification.' },
                  { step: '03', title: 'Confirmation', desc: 'Fee payment and admission confirmation.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-4xl font-bold text-yellow-400 opacity-50 font-mono">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-red-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Fee Structure Overview</h3>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-700">Class</th>
                      <th className="px-4 py-3 text-right font-bold text-gray-700">Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { class: 'Class 1st - 3rd', fee: '₹30,000' },
                      { class: 'Class 4th - 5th', fee: '₹35,000' },
                      { class: 'Class 6th - 8th', fee: '₹40,000' },
                      { class: 'Class 9th', fee: '₹45,000' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{row.class}</td>
                        <td className="px-4 py-3 text-right font-bold text-red-600">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                * Admission fee is one-time. Books and uniform charges are separate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Contact Us</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Khasua Bhaluwan,<br />
                      Tehsil Bansgaon, Kauriram,<br />
                      Gorakhpur, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600 text-lg font-medium">
                      +91 9519325100
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-gray-600 text-lg">
                      info@stbostonedtech.edu.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class Interested In</label>
                  <select 
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select Class</option>
                    {[...Array(9)].map((_, i) => (
                      <option key={i} value={i + 1}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">ST Boston EdTech</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering the next generation with quality education, values, and skills for a brighter future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Academics', 'Admission', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-red-600 flex-shrink-0 mt-1" size={18} />
                  <span>Khasua Bhaluwan, Tehsil Bansgaon, Kauriram, Gorakhpur</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-red-600 flex-shrink-0" size={18} />
                  <span>+91 9519325100</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-red-600 flex-shrink-0" size={18} />
                  <span>info@stbostonedtech.edu.in</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on admissions and events.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full border border-gray-700 focus:border-red-600"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                  <ChevronDown className="transform -rotate-90" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 ST Boston EdTech School. All rights reserved. | Managing Director: Maya Mishra</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
