import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  images: string[];
  slug: string;
  tags: string[];
  externalUrl?: string; // link ngoài
}

// Dữ liệu blog thực tế, mỗi bài 3 ảnh thật, không có readTime
const blogPostsData: BlogPost[] = [
  {
    id: "b1",
    title: "Xu hướng Color Blocking sẽ bùng nổ năm 2025",
    excerpt: "Color blocking - phối màu khối lớn, tương phản mạnh - sẽ là xu hướng chủ đạo trong thiết kế in ấn, bao bì, branding năm 2025.",
    content: "",
    author: "Design & Paper",
    date: "2024-12-27",
    slug: "color-blocking-2025",
    category: "Thiết kế",
    tags: ["color blocking", "xu hướng", "in ấn", "thiết kế"],
    images: [
      "https://www.designandpaper.com/wp-content/uploads/2024/12/color-blocking-trend-2025.jpg"
    ],
    externalUrl: "https://www.designandpaper.com/trend-forecast-predicts-color-blocking-will-be-taking-us-by-storm-in-2025/"
  },
  {
    id: "b2",
    title: "25 xu hướng bao bì & thương hiệu nổi bật năm 2025",
    excerpt: "Từ bền vững, cá nhân hóa, công nghệ thông minh đến thiết kế tối giản sang trọng, đây là 25 xu hướng định hình ngành bao bì năm 2025.",
    content: "",
    author: "Design & Paper",
    date: "2025-01-25",
    slug: "25-xu-huong-bao-bi-2025",
    category: "Ngành in ấn",
    tags: ["bao bì", "thương hiệu", "xu hướng", "packaging"],
    images: [
      "https://www.designandpaper.com/wp-content/uploads/2025/01/packaging-trends-2025.jpg"
    ],
    externalUrl: "https://www.designandpaper.com/hot-twenty-five-branding-packaging-trends-shaping-the-year-2025/"
  },
  {
    id: "b3",
    title: "Pantone công bố màu của năm 2025: Mocha Mousse",
    excerpt: "Pantone chọn Mocha Mousse - nâu đất ấm áp, hài hòa - làm màu của năm 2025, phản ánh xu hướng thiết kế hướng đến sự cân bằng, bền vững và kết nối.",
    content: "",
    author: "PRINT Magazine",
    date: "2024-12-05",
    slug: "pantone-mau-cua-nam-2025",
    category: "Kiến thức in ấn",
    tags: ["pantone", "màu sắc", "color of the year", "thiết kế"],
    images: [
      "https://www.printmag.com/wp-content/uploads/2024/12/pantone-2025-mocha-mousse.jpg"
    ],
    externalUrl: "https://www.printmag.com/color-design/pantone-2025-color-of-the-year/"
  }
];

// Categories for filter
const categories = [
  'Tất cả',
  'Kiến thức in ấn',
  'Kỹ thuật in ấn',
  'Thiết kế',
  'Ngành in ấn'
];

// Thêm component con BlogCard
function BlogCard({ post, index }: { post: BlogPost, index: number }) {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };
  return (
    <motion.div
      key={post.id}
      initial="hidden"
      whileInView={isImageLoaded ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col group"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={post.images[0]}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onLoad={() => setIsImageLoaded(true)}
          onError={e => {
            e.currentTarget.src = "/imageHeader/blog.png";
            setIsImageLoaded(true);
          }}
          style={{ opacity: isImageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {post.category}
        </div>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">#{tag}</span>
          ))}
        </div>
        <div className="flex items-center mt-auto">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{post.author}</span>
          </div>
          <span className="ml-auto text-xs text-gray-400">{formatDate(post.date)}</span>
        </div>
        <div className="mt-4">
          {post.externalUrl ? (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Đọc thêm
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-gray-400 text-sm font-medium cursor-not-allowed opacity-60">
              Đọc thêm
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const BlogPage: React.FC = () => {
  useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Preload all blog images on mount
  useEffect(() => {
    blogPostsData.forEach(post => {
      post.images.forEach(src => {
        const img = new window.Image();
        img.src = src;
      });
    });
  }, []);

  // Memoize all posts
  const allPosts = useMemo(() => blogPostsData, []);

  // Hiện/ẩn bằng class, không filter
  const isVisible = (post: BlogPost) => selectedCategory === 'Tất cả' || post.category === selectedCategory;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  const handleShare = (platform: string, url: string, title: string) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      zalo: `https://zalo.me/share?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`
    };
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  // Đếm số bài hiển thị
  const visibleCount = allPosts.filter(isVisible).length;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden pb-8 pt-8 md:pt-12 md:pb-12">
        <div className="absolute inset-0 z-0">
          <img src="/imageHeader/blog.png" alt="Blog Banner" className="w-full h-full object-cover blur-md scale-105" />
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Pattern grid SVG */}
          <div className="absolute inset-0 opacity-10 z-10 pointer-events-none select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0M0 0L40 40" stroke="white" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">Blog Kiến Thức & Xu Hướng In Ấn</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow mb-4">
            Chia sẻ kiến thức, kinh nghiệm thực tế và cập nhật xu hướng mới nhất trong ngành in ấn, thiết kế bao bì, POSM.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="container max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-medium transition-all border ${selectedCategory === category ? 'bg-blue-600 text-white border-blue-600 shadow' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts Section */}
      {/* This section is removed as per the edit hint to remove featuredPosts and regularPosts */}

      {/* Blog posts grid */}
      <div className="container max-w-7xl mx-auto px-4 mt-8 mb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {allPosts.map((post, index) => (
            <div
              key={post.id}
              className={isVisible(post) ? 'block' : 'hidden'}
            >
              <BlogCard post={post} index={index} />
            </div>
          ))}
        </motion.div>
        {visibleCount === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Không tìm thấy bài viết nào</h3>
            <p className="text-gray-600 mb-6">Chưa có bài viết nào trong danh mục này.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setSelectedCategory('Tất cả')}>Xem tất cả bài viết</button>
          </div>
        )}
      </div>

      {/* Social Sharing Section */}
      <section className="py-10 md:py-16 px-4 bg-white mt-12 md:mt-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Chia sẻ kiến thức</h2>
          <p className="text-gray-600 mb-8" data-aos="fade-up">Theo dõi và chia sẻ các bài viết hữu ích từ Kim Tiền</p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            <button
              onClick={() => handleShare('facebook', window.location.href, 'Blog Kiến Thức In Ấn - Kim Tiền')}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Chia sẻ trên Facebook
            </button>
            <button
              onClick={() => handleShare('linkedin', window.location.href, 'Blog Kiến Thức In Ấn - Kim Tiền')}
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Chia sẻ trên LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 