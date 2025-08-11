'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Editor-in-Chief',
      bio: 'Tech enthusiast with 10+ years of experience in digital content and web development.',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20female%20editor%20working%20at%20modern%20office%20desk%2C%20clean%20contemporary%20workspace%2C%20natural%20lighting%2C%20confident%20and%20approachable%20demeanor%2C%20business%20casual%20attire&width=300&height=300&seq=team1&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      role: 'Content Manager',
      bio: 'Passionate about minimalist living and productivity, helping readers find clarity in their daily lives.',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20male%20content%20manager%20in%20modern%20office%20environment%2C%20organized%20workspace%2C%20friendly%20and%20focused%20appearance%2C%20contemporary%20business%20setting&width=300&height=300&seq=team2&orientation=squarish'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Writer',
      bio: 'Adventure seeker and cultural explorer, sharing hidden gems and authentic travel experiences.',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20female%20travel%20writer%20with%20camera%20and%20laptop%2C%20adventurous%20spirit%2C%20warm%20natural%20lighting%2C%20creative%20workspace%20with%20travel%20inspiration&width=300&height=300&seq=team3&orientation=squarish'
    },
    {
      name: 'David Park',
      role: 'Business Contributor',
      bio: 'Entrepreneur and business strategist, focused on helping professionals build their personal brands.',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20male%20business%20strategist%20in%20executive%20office%2C%20confident%20leadership%20presence%2C%20modern%20corporate%20environment%2C%20strategic%20planning%20materials&width=300&height=300&seq=team4&orientation=squarish'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Monthly Readers' },
    { number: '200+', label: 'Published Articles' },
    { number: '25+', label: 'Expert Writers' },
    { number: '6', label: 'Categories Covered' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://readdy.ai/api/search-image?query=collaborative%20team%20workspace%20with%20diverse%20professionals%20working%20together%2C%20modern%20office%20environment%2C%20natural%20lighting%2C%20inspiring%20atmosphere%20with%20plants%20and%20creative%20elements&width=1920&height=600&seq=about-hero&orientation=landscape")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About BlogApp</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              We're a community-driven platform dedicated to sharing knowledge, insights, and stories that inspire and educate our readers across the globe.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BlogApp was born from a simple idea: everyone has valuable knowledge to share, and everyone deserves access to quality content that can improve their lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe in the power of shared knowledge to transform lives. Our mission is to create a platform where experts, enthusiasts, and learners can come together to share insights, experiences, and perspectives that matter.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every article on BlogApp is carefully curated to ensure it provides genuine value to our readers, whether they're looking for practical advice, inspiration, or simply a new perspective on familiar topics.
                </p>
              </div>
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20content%20creators%20collaborating%20in%20bright%20modern%20workspace%2C%20laptops%20and%20notebooks%2C%20creative%20brainstorming%20session%2C%20inspiring%20and%20productive%20atmosphere&width=500&height=500&seq=mission&orientation=squarish"
                  alt="Our Mission"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=quality%20content%20creation%20process%20with%20editing%2C%20research%20materials%2C%20and%20publishing%20workflow%2C%20professional%20editorial%20environment%2C%20attention%20to%20detail%20and%20excellence&width=500&height=500&seq=values&orientation=squarish"
                  alt="Our Values"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1 mr-3">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Quality First:</span>
                      <span className="text-gray-600 ml-1">Every piece of content is thoroughly reviewed and fact-checked.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1 mr-3">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Authenticity:</span>
                      <span className="text-gray-600 ml-1">We value genuine experiences and honest perspectives over clickbait.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1 mr-3">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Community:</span>
                      <span className="text-gray-600 ml-1">We foster a supportive environment for both writers and readers.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1 mr-3">
                      <i className="ri-check-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Accessibility:</span>
                      <span className="text-gray-600 ml-1">Knowledge should be accessible to everyone, regardless of background.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of writers, editors, and content creators brings together decades of experience across various industries and fields of expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're a reader looking for inspiration or a writer ready to share your expertise, 
              there's a place for you in the BlogApp community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Subscribe to Newsletter
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Become a Writer
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}