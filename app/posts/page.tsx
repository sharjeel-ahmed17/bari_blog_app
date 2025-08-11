'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogCard from '../../components/ui/BlogCard';
import { useState } from 'react';

export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allPosts = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development. From AI integration to progressive web apps, discover what developers need to know.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      category: 'Technology',
      readTime: '8 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20futuristic%20technology%20setup%2C%20clean%20minimal%20background%2C%20professional%20lighting%2C%20high-tech%20atmosphere%20with%20blue%20and%20purple%20accents&width=600&height=400&seq=post1&orientation=landscape'
    },
    {
      id: '2',
      title: 'Minimalist Living: How to Declutter Your Life and Mind',
      excerpt: 'Discover the art of minimalist living and how reducing physical clutter can lead to mental clarity. Learn practical tips for creating a more intentional lifestyle.',
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      category: 'Lifestyle',
      readTime: '6 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=minimalist%20modern%20living%20room%20with%20clean%20lines%2C%20natural%20lighting%2C%20neutral%20colors%2C%20simple%20furniture%2C%20zen%20atmosphere%2C%20organized%20space%2C%20peaceful%20environment&width=600&height=400&seq=post2&orientation=landscape'
    },
    {
      id: '3',
      title: 'Hidden Gems of Southeast Asia: Off the Beaten Path Adventures',
      excerpt: 'Uncover secret destinations and authentic experiences across Southeast Asia. From pristine beaches to ancient temples, find your next adventure.',
      author: 'Emma Rodriguez',
      date: 'Dec 10, 2024',
      category: 'Travel',
      readTime: '10 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20Southeast%20Asian%20landscape%20with%20ancient%20temple%2C%20lush%20tropical%20vegetation%2C%20golden%20hour%20lighting%2C%20serene%20atmosphere%2C%20traditional%20architecture%20surrounded%20by%20nature&width=600&height=400&seq=post3&orientation=landscape'
    },
    {
      id: '4',
      title: 'Building a Personal Brand in the Digital Age',
      excerpt: 'Learn how to create and maintain a strong personal brand online. Essential strategies for professionals in any industry.',
      author: 'David Park',
      date: 'Dec 8, 2024',
      category: 'Business',
      readTime: '7 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20person%20working%20on%20personal%20branding%2C%20modern%20office%20setup%2C%20laptop%20and%20marketing%20materials%2C%20clean%20contemporary%20design%2C%20inspiring%20workspace&width=600&height=400&seq=post4&orientation=landscape'
    },
    {
      id: '5',
      title: 'The Science of Better Sleep: Evidence-Based Tips',
      excerpt: 'Discover scientifically-proven methods to improve your sleep quality and wake up feeling refreshed every day.',
      author: 'Dr. Lisa Wang',
      date: 'Dec 6, 2024',
      category: 'Health',
      readTime: '9 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20comfortable%20bedding%2C%20soft%20natural%20lighting%2C%20calming%20atmosphere%2C%20modern%20interior%20design%2C%20serene%20sleep%20environment%20with%20plants%20and%20minimal%20decor&width=600&height=400&seq=post5&orientation=landscape'
    },
    {
      id: '6',
      title: 'Sustainable Fashion: Making Ethical Choices',
      excerpt: 'Navigate the world of sustainable fashion with our comprehensive guide to ethical shopping and conscious consumption.',
      author: 'Anna Thompson',
      date: 'Dec 4, 2024',
      category: 'Lifestyle',
      readTime: '5 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=sustainable%20fashion%20display%20with%20eco-friendly%20clothing%2C%20natural%20fabrics%2C%20earth%20tone%20colors%2C%20organic%20cotton%20and%20hemp%20materials%2C%20environmentally%20conscious%20design&width=600&height=400&seq=post6&orientation=landscape'
    },
    {
      id: '7',
      title: 'Cryptocurrency Investment: A Beginner\'s Guide',
      excerpt: 'Navigate the complex world of cryptocurrency with confidence. Learn the basics of digital assets, blockchain technology, and investment strategies.',
      author: 'Alex Kumar',
      date: 'Dec 2, 2024',
      category: 'Business',
      readTime: '12 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=cryptocurrency%20and%20blockchain%20concept%20with%20digital%20coins%2C%20modern%20technology%20background%2C%20financial%20charts%20and%20graphs%2C%20futuristic%20design%20with%20blue%20and%20gold%20accents&width=600&height=400&seq=post7&orientation=landscape'
    },
    {
      id: '8',
      title: 'Mediterranean Diet: Health Benefits and Recipes',
      excerpt: 'Explore the Mediterranean diet and its incredible health benefits. Includes delicious recipes and meal planning tips for a healthier lifestyle.',
      author: 'Maria Santos',
      date: 'Nov 30, 2024',
      category: 'Health',
      readTime: '8 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=Mediterranean%20diet%20ingredients%20with%20fresh%20vegetables%2C%20olive%20oil%2C%20fish%2C%20whole%20grains%2C%20colorful%20healthy%20food%20arrangement%2C%20natural%20kitchen%20setting%20with%20warm%20lighting&width=600&height=400&seq=post8&orientation=landscape'
    }
  ];

  const categories = ['All', 'Technology', 'Lifestyle', 'Travel', 'Business', 'Health'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">All Blog Posts</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our complete collection of articles covering technology, lifestyle, travel, business, and more
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="w-5 h-5 flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <p className="text-gray-600">
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                  <i className="ri-search-line text-2xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse different categories
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}