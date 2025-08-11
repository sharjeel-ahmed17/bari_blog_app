'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Technology',
      description: 'Latest trends in web development, AI, software engineering, and digital innovation',
      count: 24,
      icon: 'ri-computer-line',
      color: 'from-blue-500 to-cyan-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20laptops%2C%20code%20displays%2C%20futuristic%20gadgets%2C%20clean%20minimal%20background%2C%20blue%20and%20purple%20lighting%2C%20high-tech%20atmosphere%2C%20professional%20developer%20environment&width=600&height=400&seq=cat1&orientation=landscape'
    },
    {
      name: 'Lifestyle',
      description: 'Tips for better living, minimalism, productivity, and personal development',
      count: 18,
      icon: 'ri-heart-line',
      color: 'from-pink-500 to-rose-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20lifestyle%20scene%20with%20plants%2C%20natural%20materials%2C%20cozy%20home%20interior%2C%20wellness%20elements%2C%20soft%20natural%20lighting%2C%20mindful%20living%20atmosphere%2C%20serene%20and%20organized%20space&width=600&height=400&seq=cat2&orientation=landscape'
    },
    {
      name: 'Travel',
      description: 'Adventure guides, cultural experiences, and destination recommendations',
      count: 15,
      icon: 'ri-plane-line',
      color: 'from-green-500 to-emerald-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20travel%20destination%20with%20stunning%20landscape%2C%20crystal%20clear%20waters%2C%20mountains%20or%20beaches%2C%20golden%20hour%20lighting%2C%20adventure%20travel%20atmosphere%2C%20breathtaking%20natural%20scenery&width=600&height=400&seq=cat3&orientation=landscape'
    },
    {
      name: 'Business',
      description: 'Entrepreneurship, marketing strategies, leadership, and career development',
      count: 12,
      icon: 'ri-briefcase-line',
      color: 'from-purple-500 to-indigo-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20environment%20with%20modern%20office%2C%20strategic%20planning%20materials%2C%20charts%20and%20graphs%2C%20executive%20workspace%2C%20corporate%20success%20atmosphere%2C%20clean%20contemporary%20design&width=600&height=400&seq=cat4&orientation=landscape'
    },
    {
      name: 'Health',
      description: 'Wellness tips, nutrition advice, fitness guides, and mental health insights',
      count: 9,
      icon: 'ri-health-book-line',
      color: 'from-orange-500 to-amber-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=healthy%20lifestyle%20scene%20with%20fresh%20vegetables%2C%20fitness%20equipment%2C%20wellness%20products%2C%20natural%20ingredients%2C%20clean%20eating%20setup%2C%20vibrant%20and%20energizing%20atmosphere&width=600&height=400&seq=cat5&orientation=landscape'
    },
    {
      name: 'Food',
      description: 'Recipes, culinary techniques, restaurant reviews, and food culture',
      count: 6,
      icon: 'ri-restaurant-line',
      color: 'from-red-500 to-pink-500',
      imageUrl: 'https://readdy.ai/api/search-image?query=delicious%20gourmet%20food%20presentation%20with%20fresh%20ingredients%2C%20elegant%20plating%2C%20restaurant%20quality%20dishes%2C%20warm%20inviting%20lighting%2C%20culinary%20artistry%2C%20appetizing%20food%20styling&width=600&height=400&seq=cat6&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover articles across different topics and find content that matches your interests. 
              From technology insights to lifestyle tips, we have something for everyone.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-gray-200 overflow-hidden relative">
                      <img
                        src={category.imageUrl}
                        alt={category.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                          <i className={`${category.icon} text-2xl`}></i>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                          <p className="text-sm text-gray-500">Articles</p>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                        <span>Explore Articles</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Have a specific topic in mind? Let us know what you'd like to read about, 
              and we'll consider featuring it in our upcoming articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Suggest a Topic
              </Link>
              <Link href="/write" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Write for Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}