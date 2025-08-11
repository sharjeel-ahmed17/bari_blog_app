'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import AuthModal from './ui/AuthModal';
import { getStoredUser, storeUser, clearStoredUser, validateCredentials, User } from '../lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    const user = validateCredentials(email, password);
    if (user) {
      setCurrentUser(user);
      storeUser(user);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    clearStoredUser();
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600" style={{fontFamily: 'var(--font-pacifico)'}}>
                BlogApp
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>
              <Link href="/write" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Write Post
              </Link>
              
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">{currentUser.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-logout-box-line"></i>
                    </div>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-menu-line text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Home
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Categories
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Contact
                </Link>
                <Link href="/write" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block w-fit">
                  Write Post
                </Link>
                
                {currentUser ? (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {currentUser.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">{currentUser.name}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-logout-box-line"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}