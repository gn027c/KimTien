import React, { useState, useEffect } from 'react';
import { portfolioItemsData } from '../utils/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectHero from '../components/ProjectHero';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioItemsData);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;
  
  // Initialize scroll animations
  useScrollAnimation();
  
  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(portfolioItemsData);
    } else {
      // Match the normalized category id with the actual category
      const categoryName = portfolioItemsData.find(p => p.category === selectedCategory)?.category;
      
      if (categoryName) {
        const filtered = portfolioItemsData.filter(
          project => project.category === categoryName
        );
        setFilteredProjects(filtered);
      }
    }
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [selectedCategory]);
  
  // Custom smooth scroll function
  const smoothScrollTo = (targetY: number, duration = 1000) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      window.scrollTo(0, startY + diff * progress);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  };

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
      const el = document.getElementById('project-list');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  // Stats for the hero section
  const heroStats = [
    { label: 'Dự án', value: `${portfolioItemsData.length}+` },
    { label: 'Danh mục', value: `${portfolioItemsData.map(p => p.category).filter((v, i, a) => a.indexOf(v) === i).length - 1}` },
    { label: 'Đối tác', value: '8+' },
    { label: 'Hài lòng', value: '80%' },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with ProjectHero */}
      <ProjectHero
        title="Dự Án Đã Thực Hiện"
        subtitle="Khám phá bộ sưu tập những dự án in ấn chất lượng cao mà chúng tôi đã thực hiện cho các khách hàng doanh nghiệp."
        stats={heroStats}
        cta={[]}
      />
      <div id="project-list" className="container mx-auto px-4 py-8 bg-white">
      {/* Category filter */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-3">Danh mục sản phẩm</h2>
          <div className="flex flex-wrap gap-2">
        {portfolioItemsData.map(p => p.category).filter((v, i, a) => a.indexOf(v) === i).map(category => (
          <button
            key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600 shadow'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            {portfolioItemsData.filter(p => p.category === category).length > 0 && (
                  <span className="ml-1 text-xs text-gray-400 font-normal">
                ({portfolioItemsData.filter(p => p.category === category).length})
              </span>
            )}
          </button>
        ))}
        </div>
      </div>
      
        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
          </svg>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Không tìm thấy dự án</h3>
          <p className="text-gray-600 mb-6">
            Hiện không có dự án nào trong danh mục này
          </p>
          <button 
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setSelectedCategory('all')}
          >
            Xem tất cả dự án
          </button>
        </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl flex flex-col items-stretch p-4 w-full max-w-full mx-auto group"
              >
                {/* Image section */}
                <div className="w-full aspect-square flex items-center justify-center bg-white rounded-2xl mb-4 overflow-hidden border-2 border-transparent transition-all duration-200 group-hover:border-blue-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain max-h-[80%] max-w-[80%] mx-auto"
                  />
                </div>
                {/* Info section */}
                <div className="w-full flex flex-col items-start bg-gray-50 rounded-xl px-4 py-3">
                  {project.category && (
                    <div className="text-xs text-gray-400 font-medium mb-1">{project.category}</div>
                  )}
                  <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2">{project.title}</h3>
                </div>
              </div>
            ))}
        </div>
      )}
      
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1" aria-label="Pagination">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentPage === 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Trước
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(num => num === 1 || num === totalPages || Math.abs(num - currentPage) <= 1)
                .map((number, index, array) => {
                  if (index > 0 && array[index - 1] !== number - 1) {
                    return (
                      <React.Fragment key={`ellipsis-${number}`}>
                        <span className="px-2 py-1 text-gray-400">...</span>
                        <button
                          onClick={() => paginate(number)}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            currentPage === number
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {number}
                        </button>
                      </React.Fragment>
                    );
                  }
                  return (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        currentPage === number
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  );
                })}
          <button 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentPage === totalPages 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tiếp
          </button>
            </nav>
          </div>
        )}

        {/* Results count */}
        {filteredProjects.length > 0 && (
          <div className="mt-4 text-center text-sm text-gray-500">
            Hiển thị {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} trên tổng số {filteredProjects.length} dự án
            {selectedCategory !== 'all' && ` trong danh mục "${selectedCategory}"`}
        </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 