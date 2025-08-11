'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/ui/BlogCard';
import Link from 'next/link';

export default function Home() {
  const featuredPosts = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development. From AI integration to progressive web apps, discover what developers need to know.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      category: 'Technology',
      readTime: '8 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20futuristic%20technology%20setup%2C%20clean%20minimal%20background%2C%20professional%20lighting%2C%20high-tech%20atmosphere%20with%20blue%20and%20purple%20accents%2C%20ultra-modern%20office%20environment&width=800&height=450&seq=featured1&orientation=landscape'
    },
    {
      id: '2',
      title: 'Minimalist Living: How to Declutter Your Life and Mind',
      excerpt: 'Discover the art of minimalist living and how reducing physical clutter can lead to mental clarity. Learn practical tips for creating a more intentional lifestyle.',
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      category: 'Lifestyle',
      readTime: '6 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=minimalist%20modern%20living%20room%20with%20clean%20lines%2C%20natural%20lighting%2C%20neutral%20colors%2C%20simple%20furniture%2C%20zen%20atmosphere%2C%20organized%20space%2C%20peaceful%20environment%20with%20plants%20and%20natural%20materials&width=800&height=450&seq=featured2&orientation=landscape'
    },
    {
      id: '3',
      title: 'Hidden Gems of Southeast Asia: Off the Beaten Path Adventures',
      excerpt: 'Uncover secret destinations and authentic experiences across Southeast Asia. From pristine beaches to ancient temples, find your next adventure.',
      author: 'Emma Rodriguez',
      date: 'Dec 10, 2024',
      category: 'Travel',
      readTime: '10 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20Southeast%20Asian%20landscape%20with%20ancient%20temple%2C%20lush%20tropical%20vegetation%2C%20golden%20hour%20lighting%2C%20serene%20atmosphere%2C%20traditional%20architecture%20surrounded%20by%20nature%2C%20mystical%20and%20peaceful%20setting&width=800&height=450&seq=featured3&orientation=landscape'
    }
  ];

  const recentPosts = [
    {
      id: '4',
      title: 'Building a Personal Brand in the Digital Age',
      excerpt: 'Learn how to create and maintain a strong personal brand online. Essential strategies for professionals in any industry.',
      author: 'David Park',
      date: 'Dec 8, 2024',
      category: 'Business',
      readTime: '7 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20person%20working%20on%20personal%20branding%2C%20modern%20office%20setup%2C%20laptop%20and%20marketing%20materials%2C%20clean%20contemporary%20design%2C%20inspiring%20workspace%20with%20natural%20light%20and%20plants&width=600&height=400&seq=recent1&orientation=landscape'
    },
    {
      id: '5',
      title: 'The Science of Better Sleep: Evidence-Based Tips',
      excerpt: 'Discover scientifically-proven methods to improve your sleep quality and wake up feeling refreshed every day.',
      author: 'Dr. Lisa Wang',
      date: 'Dec 6, 2024',
      category: 'Health',
      readTime: '9 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20comfortable%20bedding%2C%20soft%20natural%20lighting%2C%20calming%20atmosphere%2C%20modern%20interior%20design%2C%20serene%20sleep%20environment%20with%20plants%20and%20minimal%20decor%2C%20wellness%20focused%20setting&width=600&height=400&seq=recent2&orientation=landscape'
    },
    {
      id: '6',
      title: 'Sustainable Fashion: Making Ethical Choices',
      excerpt: 'Navigate the world of sustainable fashion with our comprehensive guide to ethical shopping and conscious consumption.',
      author: 'Anna Thompson',
      date: 'Dec 4, 2024',
      category: 'Lifestyle',
      readTime: '5 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=sustainable%20fashion%20display%20with%20eco-friendly%20clothing%2C%20natural%20fabrics%2C%20earth%20tone%20colors%2C%20organic%20cotton%20and%20hemp%20materials%2C%20environmentally%20conscious%20design%2C%20green%20living%20aesthetic&width=600&height=400&seq=recent3&orientation=landscape'
    }
  ];

  const categories = [
    { name: 'Technology', count: 24, icon: 'ri-computer-line' },
    { name: 'Lifestyle', count: 18, icon: 'ri-heart-line' },
    { name: 'Travel', count: 15, icon: 'ri-plane-line' },
    { name: 'Business', count: 12, icon: 'ri-briefcase-line' },
    { name: 'Health', count: 9, icon: 'ri-health-book-line' },
    { name: 'Food', count: 6, icon: 'ri-restaurant-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://readdy.ai/api/search-image?query=modern%20blog%20writing%20workspace%20with%20laptop%2C%20coffee%2C%20books%2C%20and%20natural%20lighting%2C%20inspiring%20creative%20environment%2C%20warm%20atmosphere%20with%20plants%20and%20stylish%20decor%2C%20professional%20blogging%20setup%20with%20clean%20aesthetic&width=1920&height=600&seq=hero&orientation=landscape")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to BlogApp
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring stories, expert insights, and fresh perspectives from our community of passionate writers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Explore Articles
              </Link>
              <Link href="/write" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Start Writing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hand-picked stories from our community that inspire, educate, and entertain
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Browse by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`} className="cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full">
                      <i className={`${category.icon} text-xl text-blue-600`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} articles</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">Stay updated with our newest content</p>
              </div>
              <Link href="/posts" className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                View All Posts
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and never miss the latest stories, tips, and insights from our writers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}