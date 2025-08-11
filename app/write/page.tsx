'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function WritePage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    excerpt: '',
    tags: '',
    author: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    'Technology',
    'Lifestyle', 
    'Travel',
    'Business',
    'Health',
    'Food'
  ];

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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Write for BlogApp</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Share your knowledge and insights with our community. We welcome guest contributors who can provide valuable, well-researched content.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Submission Guidelines</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  Articles should be original, well-researched, and provide value to readers
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  Minimum word count: 800 words for in-depth coverage
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  Include relevant examples, data, or personal experiences
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mt-1 mr-2"></i>
                  All submissions are reviewed before publication
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} id="blog-submission" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    required
                    value={formData.author}
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
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter an engaging title for your article"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <div className="w-5 h-5 flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. web development, AI, productivity"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
                </div>
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Article Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  required
                  rows={3}
                  maxLength={300}
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Write a brief summary of your article (150-300 characters)"
                />
                <p className="text-sm text-gray-500 mt-1">{formData.excerpt.length}/300 characters</p>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Article Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={15}
                  maxLength={500}
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Write your complete article here. Include headings, paragraphs, and formatting as needed..."
                />
                <p className="text-sm text-gray-500 mt-1">{formData.content.length}/500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                    <div>
                      <h4 className="text-green-800 font-medium">Submission Received!</h4>
                      <p className="text-green-700 text-sm">Thank you for your submission. We'll review it and get back to you within 3-5 business days.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                    <div>
                      <h4 className="text-red-800 font-medium">Submission Failed</h4>
                      <p className="text-red-700 text-sm">There was an error submitting your article. Please try again.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.content.length > 500}
                  className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Article for Review'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => setFormData({
                    title: '',
                    category: '',
                    content: '',
                    excerpt: '',
                    tags: '',
                    author: '',
                    email: ''
                  })}
                  className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Write for Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full">
                  <i className="ri-community-line text-xl text-blue-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reach Our Audience</h3>
                <p className="text-gray-600 text-sm">Share your expertise with thousands of engaged readers</p>
              </div>
              
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-green-100 rounded-full">
                  <i className="ri-trophy-line text-xl text-green-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Build Authority</h3>
                <p className="text-gray-600 text-sm">Establish yourself as a thought leader in your field</p>
              </div>
              
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-purple-100 rounded-full">
                  <i className="ri-links-line text-xl text-purple-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Network & Connect</h3>
                <p className="text-gray-600 text-sm">Connect with other writers and industry professionals</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}