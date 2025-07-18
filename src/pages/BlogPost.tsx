import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  tags: string[];
}

// Mock data for blog posts
const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'Hướng dẫn chọn loại giấy phù hợp cho in ấn',
    excerpt: 'Tìm hiểu về các loại giấy khác nhau và cách chọn loại phù hợp nhất cho dự án in ấn của bạn.',
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.
</blockquote>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>
`,
    author: 'Nguyễn Văn A',
    date: '2023-07-15',
    category: 'Kiến thức in ấn',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    slug: 'huong-dan-chon-loai-giay-phu-hop-cho-in-an',
    tags: ['giấy in', 'hướng dẫn', 'chất liệu']
  },
  {
    id: '2',
    title: 'Kỹ thuật cán màng và ép kim trong in ấn',
    excerpt: 'Tìm hiểu về các kỹ thuật hoàn thiện sau in như cán màng bóng, cán màng mờ và ép kim.',
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.
</blockquote>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>
`,
    author: 'Trần Thị B',
    date: '2023-06-28',
    category: 'Kỹ thuật in',
    image: 'https://images.unsplash.com/photo-1611512730969-93d736362ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    slug: 'ky-thuat-can-mang-va-ep-kim-trong-in-an',
    tags: ['cán màng', 'ép kim', 'hoàn thiện']
  },
  {
    id: '3',
    title: 'Những lưu ý khi thiết kế bao bì sản phẩm',
    excerpt: 'Khám phá các nguyên tắc thiết kế bao bì sản phẩm hiệu quả và những lỗi thường gặp cần tránh.',
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.
</blockquote>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.</p>
`,
    author: 'Lê Văn C',
    date: '2023-05-20',
    category: 'Thiết kế',
    image: 'https://images.unsplash.com/photo-1635405055360-82ed26baa283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    slug: 'nhung-luu-y-khi-thiet-ke-bao-bi-san-pham',
    tags: ['thiết kế', 'bao bì', 'sản phẩm']
  },
];

// Get related posts by category
const getRelatedPosts = (currentPost: BlogPost): BlogPost[] => {
  return blogPostsData
    .filter(post => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, 3);
};

// Format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
};

const BlogPostPage: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Get post slug from URL
  const { slug } = useParams<{ slug: string }>();
  
  // State for current post
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  // Fetch post by slug
  useEffect(() => {
    // In a real app, this would be an API call
    const foundPost = blogPostsData.find(post => post.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost));
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  // If post not found
  if (!post) {
    return (
      <div className="flex items-center justify-center h-[70vh] flex-col">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Bài viết không tồn tại</p>
        <Link to="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Quay lại blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Post header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link 
              to={`/blog?category=${post.category}`}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
            >
              {post.category}
            </Link>
            <span className="text-gray-500 text-sm ml-auto">
              {formatDate(post.date)}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-bold">{post.author.charAt(0)}</span>
            </div>
            <div>
              <div className="font-medium text-gray-800">{post.author}</div>
              <div className="text-gray-500 text-sm">Tác giả</div>
            </div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Post content */}
        <div className="prose prose-lg max-w-none mb-12" data-aos="fade-up">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Tags */}
        <div className="mb-12 border-t border-b py-6" data-aos="fade-up">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/blog?tag=${tag}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Share buttons */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Chia sẻ bài viết</h3>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0003 0C5.3723 0 0.000305176 5.373 0.000305176 12C0.000305176 17.302 3.43831 21.8 8.2073 23.387C8.8073 23.494 9.0233 23.124 9.0233 22.808C9.0233 22.523 9.0153 21.768 9.0113 20.768C5.6723 21.495 4.9673 19.158 4.9673 19.158C4.4233 17.773 3.6353 17.404 3.6353 17.404C2.5453 16.659 3.7173 16.675 3.7173 16.675C4.9223 16.759 5.5553 17.912 5.5553 17.912C6.6263 19.746 8.3643 19.216 9.0483 18.909C9.1563 18.134 9.4673 17.604 9.8103 17.305C7.1453 17.004 4.3443 15.971 4.3443 11.374C4.3443 10.063 4.8113 8.993 5.5793 8.153C5.4553 7.85 5.0443 6.63 5.6953 4.977C5.6953 4.977 6.7043 4.655 8.9963 6.207C9.9563 5.941 10.9803 5.808 12.0003 5.803C13.0203 5.808 14.0443 5.941 15.0063 6.207C17.2943 4.655 18.3013 4.977 18.3013 4.977C18.9533 6.63 18.5423 7.85 18.4203 8.153C19.1893 8.993 19.6543 10.063 19.6543 11.374C19.6543 15.983 16.8493 17 14.1753 17.295C14.6063 17.668 14.9903 18.407 14.9903 19.538C14.9903 21.147 14.9753 22.416 14.9753 22.808C14.9753 23.128 15.1913 23.501 15.8003 23.386C20.5663 21.796 24.0003 17.3 24.0003 12C24.0003 5.373 18.6273 0 12.0003 0Z"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formatDate(relatedPost.date)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Comment form */}
        <div className="bg-gray-50 rounded-xl p-8" data-aos="fade-up">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Để lại bình luận</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Bình luận <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Gửi bình luận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 