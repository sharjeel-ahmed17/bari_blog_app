
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogCard from '../../../components/ui/BlogCard';
import CommentSection from '../../../components/ui/CommentSection';
import AuthModal from '../../../components/ui/AuthModal';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getStoredUser, storeUser, validateCredentials, User } from '../../../lib/auth';

interface PostDetailProps {
  postId: string;
}

export default function PostDetail({ postId }: PostDetailProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
      setIsContentVisible(true);
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    const user = validateCredentials(email, password);
    if (user) {
      setCurrentUser(user);
      storeUser(user);
      setIsContentVisible(true);
    }
  };

  const posts = {
    '1': {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      content: `
        <p>The web development landscape is evolving at an unprecedented pace, driven by emerging technologies, changing user expectations, and the need for more efficient development processes. As we move through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>

        <h2>1. Artificial Intelligence Integration</h2>
        <p>AI is no longer just a buzzword in web development—it's becoming an integral part of the development process. From AI-powered code completion tools like GitHub Copilot to intelligent testing frameworks, developers are leveraging machine learning to write better code faster.</p>
        
        <p>Modern web applications are incorporating AI features such as:</p>
        <ul>
          <li>Intelligent chatbots and virtual assistants</li>
          <li>Personalized content recommendations</li>
          <li>Automated accessibility improvements</li>
          <li>Dynamic user interface adaptations</li>
        </ul>

        <h2>2. Progressive Web Apps (PWAs)</h2>
        <p>Progressive Web Apps continue to bridge the gap between web and native applications. With improved browser support and enhanced capabilities, PWAs offer:</p>
        <ul>
          <li>Offline functionality through service workers</li>
          <li>Push notifications</li>
          <li>App-like user experiences</li>
          <li>Reduced development costs compared to native apps</li>
        </ul>

        <h2>3. WebAssembly (WASM)</h2>
        <p>WebAssembly is revolutionizing web performance by allowing developers to run code written in languages like C++, Rust, and Go directly in browsers. This technology enables:</p>
        <ul>
          <li>Near-native performance for web applications</li>
          <li>Complex computations in the browser</li>
          <li>Porting existing desktop applications to the web</li>
          <li>Enhanced gaming and multimedia experiences</li>
        </ul>

        <h2>4. Serverless Architecture</h2>
        <p>The serverless paradigm continues to gain traction, offering developers the ability to build scalable applications without managing infrastructure. Key benefits include:</p>
        <ul>
          <li>Automatic scaling based on demand</li>
          <li>Pay-per-execution pricing models</li>
          <li>Faster time-to-market</li>
          <li>Reduced operational complexity</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The future of web development is bright, with technologies that promise to make applications faster, more intelligent, and more accessible than ever before. Developers who embrace these trends will be well-positioned to create the next generation of web experiences.</p>
      `,
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      category: 'Technology',
      readTime: '8 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20futuristic%20technology%20setup%2C%20clean%20minimal%20background%2C%20professional%20lighting%2C%20high-tech%20atmosphere%20with%20blue%20and%20purple%20accents%2C%20ultra-modern%20office%20environment&width=1200&height=600&seq=post1detail&orientation=landscape',
      tags: ['Web Development', 'Technology', 'AI', 'PWA', 'WebAssembly']
    },
    '2': {
      title: 'Minimalist Living: How to Declutter Your Life and Mind',
      content: `
        <p>In our fast-paced, consumer-driven world, the concept of minimalist living has emerged as a powerful antidote to the chaos and overwhelm that many of us experience daily. Minimalism isn't just about having fewer possessions—it's a philosophy that can transform every aspect of your life.</p>

        <h2>Understanding Minimalism</h2>
        <p>Minimalism is about intentional living. It's the practice of surrounding yourself only with things that serve a purpose or bring you joy, while eliminating the excess that distracts from what truly matters. This approach extends beyond physical possessions to include digital clutter, commitments, and even thoughts.</p>

        <h2>The Connection Between Physical and Mental Clutter</h2>
        <p>Research has shown a strong correlation between our physical environment and mental state. A cluttered space often reflects a cluttered mind, and vice versa. When we reduce physical clutter, we often experience:</p>
        <ul>
          <li>Improved focus and concentration</li>
          <li>Reduced stress and anxiety</li>
          <li>Better sleep quality</li>
          <li>Increased creativity and productivity</li>
        </ul>

        <h2>Practical Steps to Start Decluttering</h2>
        <h3>1. Start Small</h3>
        <p>Begin with one drawer, one shelf, or one category of items. The key is to start somewhere without overwhelming yourself.</p>

        <h3>2. Use the One-Year Rule</h3>
        <p>If you haven't used an item in the past year, seriously consider whether you need it. Exceptions might include seasonal items or emergency supplies.</p>

        <h3>3. Digital Declutter</h3>
        <p>Don't forget about digital clutter. Clean up your desktop, organize your photos, unsubscribe from unnecessary emails, and delete apps you don't use.</p>

        <h2>Creating Mental Space</h2>
        <p>Decluttering your mind is just as important as decluttering your space:</p>
        <ul>
          <li>Practice mindfulness meditation</li>
          <li>Write down your thoughts to clear mental space</li>
          <li>Learn to say no to commitments that don't align with your values</li>
          <li>Limit news and social media consumption</li>
        </ul>

        <h2>The Benefits of Minimalist Living</h2>
        <p>Adopting a minimalist lifestyle can lead to profound changes in your life, including more time for relationships and experiences, reduced financial stress, and a deeper appreciation for what you already have.</p>
      `,
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      category: 'Lifestyle',
      readTime: '6 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=minimalist%20modern%20living%20room%20with%20clean%20lines%2C%20natural%20lighting%2C%20neutral%20colors%2C%20simple%20furniture%2C%20zen%20atmosphere%2C%20organized%20space%2C%20peaceful%20environment%20with%20plants%20and%20natural%20materials%2C%20serene%20interior%20design&width=1200&height=600&seq=post2detail&orientation=landscape',
      tags: ['Minimalism', 'Lifestyle', 'Decluttering', 'Mental Health', 'Productivity']
    },
    '3': {
      title: 'Hidden Gems of Southeast Asia: Off the Beaten Path Adventures',
      content: `
        <p>Southeast Asia is renowned for its popular destinations like Bangkok, Bali, and Singapore. However, the region's true magic often lies in its hidden gems—places where authentic culture thrives, natural beauty remains untouched, and adventures await those willing to venture off the beaten path.</p>

        <h2>1. Kep, Cambodia</h2>
        <p>Once a glamorous seaside resort town during French colonial times, Kep has retained its old-world charm while offering incredible seafood and stunning sunsets. The famous Kep crab market and nearby Rabbit Island make this a perfect destination for those seeking tranquility.</p>

        <h2>2. Cat Ba Island, Vietnam</h2>
        <p>While Ha Long Bay attracts millions of tourists, Cat Ba Island offers similar limestone karst landscapes with fewer crowds. The island features pristine beaches, incredible rock climbing opportunities, and the endangered Cat Ba langur.</p>

        <h2>3. Nusa Penida, Indonesia</h2>
        <p>This rugged island southeast of Bali boasts dramatic cliffs, crystal-clear waters, and unique rock formations. Kelingking Beach and Angel's Billabong are just two of the Instagram-worthy spots that make this island special.</p>

        <h2>4. Koh Rong Sanloem, Cambodia</h2>
        <p>Known for its bioluminescent plankton, this island offers some of the clearest waters in Southeast Asia. The western beaches provide perfect sunset views, while the eastern shores offer excellent snorkeling.</p>

        <h2>Travel Tips for Hidden Gems</h2>
        <ul>
          <li>Research local customs and learn basic phrases in the local language</li>
          <li>Pack light but bring essentials like sunscreen and insect repellent</li>
          <li>Be flexible with your itinerary—some of the best discoveries happen spontaneously</li>
          <li>Respect local communities and environments</li>
          <li>Consider traveling during shoulder seasons for better weather and fewer crowds</li>
        </ul>

        <h2>Sustainable Travel Practices</h2>
        <p>When visiting these pristine destinations, it's crucial to practice responsible tourism:</p>
        <ul>
          <li>Choose eco-friendly accommodations</li>
          <li>Support local businesses and communities</li>
          <li>Minimize plastic use and respect wildlife</li>
          <li>Follow Leave No Trace principles</li>
        </ul>

        <h2>Planning Your Adventure</h2>
        <p>The best time to visit most Southeast Asian hidden gems is during the dry season (November to April). However, each destination has its unique characteristics, so research specific weather patterns and local events before booking your trip.</p>
      `,
      author: 'Emma Rodriguez',
      date: 'Dec 10, 2024',
      category: 'Travel',
      readTime: '10 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20Southeast%20Asian%20landscape%20with%20ancient%20temple%2C%20lush%20tropical%20vegetation%2C%20golden%20hour%20lighting%2C%20serene%20atmosphere%2C%20traditional%20architecture%20surrounded%20by%20nature%2C%20mystical%20and%20peaceful%20setting%20with%20clear%20blue%20skies&width=1200&height=600&seq=post3detail&orientation=landscape',
      tags: ['Southeast Asia', 'Travel', 'Adventure', 'Hidden Gems', 'Culture']
    }
  };

  const currentPost = posts[postId as keyof typeof posts] || posts['1'];

  const relatedPosts = [
    {
      id: '4',
      title: 'Building a Personal Brand in the Digital Age',
      excerpt: 'Learn how to create and maintain a strong personal brand online. Essential strategies for professionals in any industry.',
      author: 'David Park',
      date: 'Dec 8, 2024',
      category: 'Business',
      readTime: '7 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20person%20working%20on%20personal%20branding%2C%20modern%20office%20setup%2C%20laptop%20and%20marketing%20materials%2C%20clean%20contemporary%20design%2C%20inspiring%20workspace%20with%20natural%20light&width=400&height=300&seq=related1&orientation=landscape'
    },
    {
      id: '5',
      title: 'The Science of Better Sleep: Evidence-Based Tips',
      excerpt: 'Discover scientifically-proven methods to improve your sleep quality and wake up feeling refreshed every day.',
      author: 'Dr. Lisa Wang',
      date: 'Dec 6, 2024',
      category: 'Health',
      readTime: '9 min read',
      imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20comfortable%20bedding%2C%20soft%20natural%20lighting%2C%20calming%20atmosphere%2C%20modern%20interior%20design%2C%20serene%20sleep%20environment%20with%20plants%20and%20minimal%20decor&width=400&height=300&seq=related2&orientation=landscape'
    }
  ];

  const handleLike = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  if (!isContentVisible) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-blue-100 rounded-full">
              <i className="ri-lock-line text-3xl text-blue-600"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Authentication Required</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Please sign in to access the full blog content and participate in discussions.
            </p>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Sign In to Continue
            </button>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-gray-600 font-medium mb-3">Demo Credentials:</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email: admin@blog.com</p>
                <p className="text-sm text-gray-500">Password: admin123</p>
              </div>
            </div>
          </div>
        </main>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={handleLogin}
        />

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link href="/posts" className="hover:text-blue-600 cursor-pointer">Posts</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-gray-900">{currentPost.title}</span>
            </nav>

            <div className="flex items-center space-x-4 mb-6">
              <Link href={`/categories/${currentPost.category.toLowerCase()}`} className="cursor-pointer">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                  {currentPost.category}
                </span>
              </Link>
              <span className="text-gray-500 text-sm">{currentPost.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {currentPost.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-lg">
                    {currentPost.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{currentPost.author}</p>
                  <p className="text-sm text-gray-500">{currentPost.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                  </div>
                  <span className="text-sm font-medium">{likeCount}</span>
                </button>
                
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                  <i className="ri-share-line text-gray-600"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
            <img
              src={currentPost.imageUrl}
              alt={currentPost.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {currentPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-xl">
                  {currentPost.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {currentPost.author}</h3>
                <p className="text-gray-600 leading-relaxed">
                  A passionate writer and expert in {currentPost.category.toLowerCase()}, sharing insights and experiences to help readers navigate the modern world. Follow for more engaging content and practical advice.
                </p>
              </div>
            </div>
          </div>
        </article>

        <CommentSection postId={postId} currentUser={currentUser?.name || null} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
