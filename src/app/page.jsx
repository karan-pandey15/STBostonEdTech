"use client"
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown, BookOpen, Users, Award, Calendar } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#D93A3A] rounded-full flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#D93A3A]">ST Boston EdTech</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'academics', 'admission', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-gray-700 hover:text-[#D93A3A] font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-[#D93A3A]' : ''
                  }`}
                >
                  {item === 'about' ? 'About Us' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'academics', 'admission', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#D93A3A] capitalize"
                >
                  {item === 'about' ? 'About Us' : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-[#D93A3A] to-[#a82d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to ST Boston EdTech School
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Empowering young minds from Class 1 to Class 8 with quality education, innovative teaching methods, and holistic development for a brighter future.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('admission')}
                  className="bg-white text-[#D93A3A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#D93A3A] transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/image/first.png"
                  alt="Students Learning"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect width="600" height="400" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23D93A3A"%3EStudents Learning%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#D93A3A] text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Classes 1-8
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-[#D93A3A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/image/second.png"
                alt="School Building"
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect width="600" height="400" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="%23D93A3A"%3ESchool Building%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At ST Boston EdTech School, we are committed to providing exceptional education for students from Class 1 to Class 8. Our mission is to nurture curious minds, foster creativity, and build strong foundations in academics, character, and life skills.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We believe in holistic development where every child discovers their unique potential through innovative teaching methods, technology integration, and personalized attention in a safe and supportive environment.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-[#D93A3A] mb-2">500+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-[#D93A3A] mb-2">50+</div>
                  <div className="text-gray-600">Teachers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: BookOpen, title: 'Quality Education', desc: 'Comprehensive curriculum aligned with educational standards' },
              { icon: Users, title: 'Experienced Faculty', desc: 'Dedicated teachers with proven teaching methodologies' },
              { icon: Award, title: 'Holistic Development', desc: 'Focus on academics, sports, arts, and character building' },
              { icon: Calendar, title: 'Modern Facilities', desc: 'State-of-the-art classrooms and learning resources' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#D93A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academics</h2>
            <div className="w-24 h-1 bg-[#D93A3A] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum for Classes 1-8 ensures strong academic foundations and prepares students for future success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                level: 'Primary Section',
                classes: 'Classes 1-5',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art & Craft', 'Physical Education'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                level: 'Middle Section',
                classes: 'Classes 6-8',
                subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Sanskrit/Hindi', 'Physical Education'],
                color: 'from-[#D93A3A] to-[#a82d2d]'
              },
              {
                level: 'Co-Curricular',
                classes: 'All Classes',
                subjects: ['Sports & Games', 'Music & Dance', 'Art & Craft', 'Debates & Quizzes', 'Science Clubs', 'Cultural Activities', 'Leadership Programs'],
                color: 'from-green-500 to-green-600'
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-r ${section.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{section.level}</h3>
                  <p className="text-lg opacity-90">{section.classes}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronDown className="text-[#D93A3A] mt-1 mr-2 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Approach */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Learning Approach</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#D93A3A] mb-4">Interactive Learning</h4>
                <p className="text-gray-700 mb-4">
                  We use modern teaching methods including smart classrooms, digital learning tools, and hands-on activities to make learning engaging and effective.
                </p>
                <img 
                  src="/image/third.png" 
                  alt="Interactive Learning" 
                  className="rounded-xl shadow-md"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect width="500" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="%23D93A3A"%3EInteractive Learning%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#D93A3A] mb-4">Individual Attention</h4>
                <p className="text-gray-700 mb-4">
                  Small class sizes ensure personalized attention for every student, helping them excel at their own pace with regular assessments and feedback.
                </p>
                <img 
                  src="/image/four.png" 
                  alt="Individual Attention" 
                  className="rounded-xl shadow-md"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect width="500" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="%23D93A3A"%3EIndividual Attention%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admissions</h2>
            <div className="w-24 h-1 bg-[#D93A3A] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant learning community. Admissions are open for Classes 1-8 for the academic year 2025-26
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-[#D93A3A] to-[#a82d2d] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Admission Process</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Submit Application', desc: 'Fill out the admission form online or visit our school office' },
                  { step: '2', title: 'Document Verification', desc: 'Submit required documents including birth certificate and previous academic records' },
                  { step: '3', title: 'Interaction Session', desc: 'Brief interaction with the student and parents to understand learning needs' },
                  { step: '4', title: 'Admission Confirmation', desc: 'Complete fee payment and receive admission confirmation' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white text-[#D93A3A] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <ul className="space-y-3">
                  {[
                    'Birth Certificate',
                    'Previous School Transfer Certificate (TC)',
                    'Academic Records / Report Cards',
                    'Aadhar Card (Student & Parents)',
                    'Passport Size Photographs',
                    'Address Proof'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronDown className="text-[#D93A3A] mr-3" size={20} />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#D93A3A] text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Important Dates</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span>Admission Start Date:</span>
                    <span className="font-bold">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span>Last Date to Apply:</span>
                    <span className="font-bold">March 31, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Session Begins:</span>
                    <span className="font-bold">April 1, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fee Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#D93A3A] text-white">
                    <th className="px-6 py-4 text-left rounded-tl-lg">Class</th>
                    <th className="px-6 py-4 text-left">Admission Fee (One-time)</th>
                    <th className="px-6 py-4 text-left">Annual Tuition Fee</th>
                    <th className="px-6 py-4 text-left rounded-tr-lg">Total (First Year)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { class: 'Class 1-3', admission: '₹5,000', annual: '₹30,000', total: '₹35,000' },
                    { class: 'Class 4-5', admission: '₹5,000', annual: '₹35,000', total: '₹40,000' },
                    { class: 'Class 6-8', admission: '₹5,000', annual: '₹40,000', total: '₹45,000' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">{row.class}</td>
                      <td className="px-6 py-4">{row.admission}</td>
                      <td className="px-6 py-4">{row.annual}</td>
                      <td className="px-6 py-4 font-bold text-[#D93A3A]">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">
              * Fee structure includes tuition, examination fees, and basic learning materials. Transportation and extracurricular activities are charged separately.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#D93A3A] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for admissions, queries, or to schedule a school visit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D93A3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Gorakhnath Mandir,<br />
                        Gorakhpur, Uttar Pradesh 273015 <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D93A3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        +91 9999781282<br />
                        +91 9999781282
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D93A3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        info@stbostonedtech.edu.in<br />
                        admissions@stbostonedtech.edu.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D93A3A] to-[#a82d2d] text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/30 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/30 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D93A3A]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D93A3A]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D93A3A]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Class of Interest</label>
                  <select 
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D93A3A]"
                  >
                    <option value="">Select Class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D93A3A]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#D93A3A] text-white py-4 rounded-lg font-semibold hover:bg-[#a82d2d] transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#D93A3A] rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">ST Boston EdTech</h3>
              </div>
              <p className="text-gray-400">
                Nurturing young minds with quality education and holistic development for Classes 1-8.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Academics', 'Admission', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-400 hover:text-[#D93A3A] transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li> Gorakhnath Mandir,</li>
                <li>  Gorakhpur, Uttar Pradesh 273015 </li>
                <li>+91 9999781282</li>
                <li>info@stbostonedtech.edu.in</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D93A3A] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D93A3A] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D93A3A] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ST Boston EdTech School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}