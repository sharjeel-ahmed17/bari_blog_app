'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      description: 'Get in touch for partnerships, submissions, or general inquiries',
      contact: 'hello@blogapp.com',
      action: 'Send Email'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Support',
      description: 'Need help with your account or have technical questions?',
      contact: 'support@blogapp.com',
      action: 'Get Support'
    },
    {
      icon: 'ri-newspaper-line',
      title: 'Media Inquiries',
      description: 'Press, partnerships, and collaboration opportunities',
      contact: 'media@blogapp.com',
      action: 'Contact Media Team'
    }
  ];

  const faqs = [
    {
      question: 'How do I submit an article for publication?',
      answer: 'You can submit articles through our "Write for Us" page. All submissions are reviewed by our editorial team within 3-5 business days.'
    },
    {
      question: 'Do you accept guest posts from new writers?',
      answer: 'Yes! We welcome submissions from writers of all experience levels. Focus on providing valuable, well-researched content that serves our audience.'
    },
    {
      question: 'How often do you publish new content?',
      answer: 'We publish new articles multiple times per week across all our categories. Subscribe to our newsletter to stay updated with the latest posts.'
    },
    {
      question: 'Can I suggest topics for future articles?',
      answer: 'Absolutely! We love hearing from our readers about topics they\'d like to see covered. Use the contact form below to share your suggestions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                    <i className={`${info.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{info.description}</p>
                  <p className="text-blue-600 font-medium mb-4">{info.contact}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
                    {info.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="submission">Article Submission</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="w-5 h-5 flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                    <div>
                      <h4 className="text-green-800 font-medium">Message Sent!</h4>
                      <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                    <div>
                      <h4 className="text-red-800 font-medium">Message Failed</h4>
                      <p className="text-red-700 text-sm">There was an error sending your message. Please try again.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Stay Connected?</h2>
              <p className="text-lg text-blue-100 mb-8">
                Follow us on social media for the latest updates, articles, and community highlights.
              </p>
              <div className="flex justify-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}