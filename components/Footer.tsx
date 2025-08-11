'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-pacifico)'}}>
              BlogApp
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A modern blogging platform where writers share their stories, insights, and expertise with the world. Join our community of passionate content creators.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-facebook-fill text-xl hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-twitter-fill text-xl hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-linkedin-fill text-xl hover:text-blue-400 transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-instagram-fill text-xl hover:text-blue-400 transition-colors"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/categories" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Categories
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <div className="space-y-2">
              <Link href="/categories/technology" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Technology
              </Link>
              <Link href="/categories/lifestyle" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Lifestyle
              </Link>
              <Link href="/categories/travel" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Travel
              </Link>
              <Link href="/categories/business" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Business
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 BlogApp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm cursor-pointer">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}