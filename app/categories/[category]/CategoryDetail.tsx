'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogCard from '../../../components/ui/BlogCard';
import Link from 'next/link';

interface CategoryDetailProps {
  categoryName: string;
}

export default function CategoryDetail({ categoryName }: CategoryDetailProps) {
  const categoryData = {
    technology: {
      title: 'Technology',
      description: 'Explore the latest trends in web development, AI, software engineering, and digital innovation',
      icon: 'ri-computer-line',
      color: 'from-blue-500 to-cyan-500',
      posts: [
        {
          id: '1',
          title: 'The Future of Web Development: Trends to Watch in 2024',
          excerpt: 'Explore the latest trends and technologies shaping the future of web development. From AI integration to progressive web apps, discover what developers need to know.',
          author: 'Sarah Johnson',
          date: 'Dec 15, 2024',
          category: 'Technology',
          readTime: '8 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20futuristic%20technology%20setup%2C%20clean%20minimal%20background%2C%20professional%20lighting%2C%20high-tech%20atmosphere&width=600&height=400&seq=tech1&orientation=landscape'
        },
        {
          id: '7',
          title: 'Cryptocurrency Investment: A Beginner\'s Guide',
          excerpt: 'Navigate the complex world of cryptocurrency with confidence. Learn the basics of digital assets, blockchain technology, and investment strategies.',
          author: 'Alex Kumar',
          date: 'Dec 2, 2024',
          category: 'Technology',
          readTime: '12 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=cryptocurrency%20and%20blockchain%20concept%20with%20digital%20coins%2C%20modern%20technology%20background%2C%20financial%20charts%20and%20graphs%2C%20futuristic%20design%20with%20blue%20and%20gold%20accents&width=600&height=400&seq=tech2&orientation=landscape'
        }
      ]
    },
    lifestyle: {
      title: 'Lifestyle',
      description: 'Tips for better living, minimalism, productivity, and personal development',
      icon: 'ri-heart-line',
      color: 'from-pink-500 to-rose-500',
      posts: [
        {
          id: '2',
          title: 'Minimalist Living: How to Declutter Your Life and Mind',
          excerpt: 'Discover the art of minimalist living and how reducing physical clutter can lead to mental clarity. Learn practical tips for creating a more intentional lifestyle.',
          author: 'Michael Chen',
          date: 'Dec 12, 2024',
          category: 'Lifestyle',
          readTime: '6 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=minimalist%20modern%20living%20room%20with%20clean%20lines%2C%20natural%20lighting%2C%20neutral%20colors%2C%20simple%20furniture%2C%20zen%20atmosphere%2C%20organized%20space&width=600&height=400&seq=lifestyle1&orientation=landscape'
        },
        {
          id: '6',
          title: 'Sustainable Fashion: Making Ethical Choices',
          excerpt: 'Navigate the world of sustainable fashion with our comprehensive guide to ethical shopping and conscious consumption.',
          author: 'Anna Thompson',
          date: 'Dec 4, 2024',
          category: 'Lifestyle',
          readTime: '5 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=sustainable%20fashion%20display%20with%20eco-friendly%20clothing%2C%20natural%20fabrics%2C%20earth%20tone%20colors%2C%20organic%20cotton%20and%20hemp%20materials%2C%20environmentally%20conscious%20design&width=600&height=400&seq=lifestyle2&orientation=landscape'
        }
      ]
    },
    travel: {
      title: 'Travel',
      description: 'Adventure guides, cultural experiences, and destination recommendations',
      icon: 'ri-plane-line',
      color: 'from-green-500 to-emerald-500',
      posts: [
        {
          id: '3',
          title: 'Hidden Gems of Southeast Asia: Off the Beaten Path Adventures',
          excerpt: 'Uncover secret destinations and authentic experiences across Southeast Asia. From pristine beaches to ancient temples, find your next adventure.',
          author: 'Emma Rodriguez',
          date: 'Dec 10, 2024',
          category: 'Travel',
          readTime: '10 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20Southeast%20Asian%20landscape%20with%20ancient%20temple%2C%20lush%20tropical%20vegetation%2C%20golden%20hour%20lighting%2C%20serene%20atmosphere%2C%20traditional%20architecture&width=600&height=400&seq=travel1&orientation=landscape'
        }
      ]
    },
    business: {
      title: 'Business',
      description: 'Entrepreneurship, marketing strategies, leadership, and career development',
      icon: 'ri-briefcase-line',
      color: 'from-purple-500 to-indigo-500',
      posts: [
        {
          id: '4',
          title: 'Building a Personal Brand in the Digital Age',
          excerpt: 'Learn how to create and maintain a strong personal brand online. Essential strategies for professionals in any industry.',
          author: 'David Park',
          date: 'Dec 8, 2024',
          category: 'Business',
          readTime: '7 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20person%20working%20on%20personal%20branding%2C%20modern%20office%20setup%2C%20laptop%20and%20marketing%20materials%2C%20clean%20contemporary%20design&width=600&height=400&seq=business1&orientation=landscape'
        }
      ]
    },
    health: {
      title: 'Health',
      description: 'Wellness tips, nutrition advice, fitness guides, and mental health insights',
      icon: 'ri-health-book-line',
      color: 'from-orange-500 to-amber-500',
      posts: [
        {
          id: '5',
          title: 'The Science of Better Sleep: Evidence-Based Tips',
          excerpt: 'Discover scientifically-proven methods to improve your sleep quality and wake up feeling refreshed every day.',
          author: 'Dr. Lisa Wang',
          date: 'Dec 6, 2024',
          category: 'Health',
          readTime: '9 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20comfortable%20bedding%2C%20soft%20natural%20lighting%2C%20calming%20atmosphere%2C%20modern%20interior%20design%2C%20serene%20sleep%20environment&width=600&height=400&seq=health1&orientation=landscape'
        },
        {
          id: '8',
          title: 'Mediterranean Diet: Health Benefits and Recipes',
          excerpt: 'Explore the Mediterranean diet and its incredible health benefits. Includes delicious recipes and meal planning tips for a healthier lifestyle.',
          author: 'Maria Santos',
          date: 'Nov 30, 2024',
          category: 'Health',
          readTime: '8 min read',
          imageUrl: 'https://readdy.ai/api/search-image?query=Mediterranean%20diet%20ingredients%20with%20fresh%20vegetables%2C%20olive%20oil%2C%20fish%2C%20whole%20grains%2C%20colorful%20healthy%20food%20arrangement%2C%20natural%20kitchen%20setting&width=600&height=400&seq=health2&orientation=landscape'
        }
      ]
    },
    food: {
      title: 'Food',
      description: 'Recipes, culinary techniques, restaurant reviews, and food culture',
      icon: 'ri-restaurant-line',
      color: 'from-red-500 to-pink-500',
      posts: []
    }
  };

  const currentCategory = categoryData[categoryName as keyof typeof categoryData] || categoryData.technology;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className={`relative bg-gradient-to-br ${currentCategory.color} text-white py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-white cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link href="/categories" className="hover:text-white cursor-pointer">Categories</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white">{currentCategory.title}</span>
            </nav>

            <div className="flex items-center space-x-6 mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl">
                <i className={`${currentCategory.icon} text-3xl text-white`}></i>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{currentCategory.title}</h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  {currentCategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <span className="font-semibold">{currentCategory.posts.length}</span> articles
              </div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="text-sm">Updated regularly</div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentCategory.posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.posts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${currentCategory.color} rounded-2xl text-white`}>
                  <i className={`${currentCategory.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  We're working on creating amazing content for this category. Check back soon for new articles!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/posts" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    Browse All Posts
                  </Link>
                  <Link href="/contact" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                    Suggest Content
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {currentCategory.posts.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Want More {currentCategory.title} Content?</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to get the latest articles delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}