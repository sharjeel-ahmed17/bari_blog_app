'use client';

import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export default function BlogCard({ id, title, excerpt, author, date, category, readTime, imageUrl }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/posts/${id}`} className="cursor-pointer">
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Link href={`/categories/${category.toLowerCase()}`} className="cursor-pointer">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
              {category}
            </span>
          </Link>
          <span className="text-gray-500 text-sm">{readTime}</span>
        </div>
        
        <Link href={`/posts/${id}`} className="cursor-pointer">
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
          
          <Link href={`/posts/${id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer whitespace-nowrap">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}