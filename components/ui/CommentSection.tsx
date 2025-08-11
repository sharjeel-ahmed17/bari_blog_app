'use client';

import { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

interface CommentSectionProps {
  postId: string;
  currentUser: string | null;
}

export default function CommentSection({ postId, currentUser }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alex Chen',
      content: 'Great article! The insights about minimalism really resonated with me. I\'ve been trying to declutter my workspace and this gives me the motivation to continue.',
      date: '2 hours ago',
      likes: 5,
      isLiked: false
    },
    {
      id: '2',
      author: 'Sarah Miller',
      content: 'Thanks for sharing these practical tips. I particularly found the section about digital decluttering helpful. Going to unsubscribe from unnecessary emails right now!',
      date: '5 hours ago',
      likes: 8,
      isLiked: true
    },
    {
      id: '3',
      author: 'David Park',
      content: 'I\'ve been following a minimalist lifestyle for about a year now, and I can confirm the mental clarity benefits mentioned here. It\'s truly life-changing.',
      date: '1 day ago',
      likes: 12,
      isLiked: false
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser) return;

    setIsSubmitting(true);

    const comment: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content: newComment.trim(),
      date: 'Just now',
      likes: 0,
      isLiked: false
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
    setIsSubmitting(false);
  };

  const handleLikeComment = (commentId: string) => {
    if (!currentUser) return;
    
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Comments ({comments.length})
        </h2>

        {currentUser ? (
          <form onSubmit={handleSubmitComment} className="mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-sm">
                  {currentUser.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-500">
                    {newComment.length}/500 characters
                  </span>
                  <button
                    type="submit"
                    disabled={!newComment.trim() || isSubmitting || newComment.length > 500}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Posting...' : 'Post Comment'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 text-center">
              Please sign in to join the conversation and share your thoughts.
            </p>
          </div>
        )}

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium text-sm">
                    {comment.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {comment.content}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      disabled={!currentUser}
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className={`${comment.isLiked && currentUser ? 'ri-heart-fill text-red-500' : 'ri-heart-line'}`}></i>
                      </div>
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-chat-3-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No comments yet</h3>
            <p className="text-gray-600">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </section>
  );
}