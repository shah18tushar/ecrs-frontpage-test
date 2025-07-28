'use client';

import React, { useState } from 'react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import { blogsData, categories } from '@/data/blogsData';
import { Tabs } from '@/components/ui/Tabs';
import { BookOpen, X, Calendar, Tag, Hash } from 'lucide-react';
import { Pagination } from '@/components/Pagination';

const BLOGS_PER_PAGE = 5; // Number of blogs to show per page

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlog, setSelectedBlog] = useState<typeof blogsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredBlogs =
        selectedCategory === 'All'
            ? blogsData
            : blogsData.filter((blog) => blog.category === selectedCategory);

    // Calculate pagination
    const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * BLOGS_PER_PAGE,
        currentPage * BLOGS_PER_PAGE
    );

    const tabs = ['All', ...categories].map((category) => ({
        id: category,
        name: category,
        icon: BookOpen,
    }));

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReadMoreClick = (blog: typeof blogsData[0]) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Reset to page 1 when category changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    return (
        <div className="text-black">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[250px] mt-14 overflow-hidden flex items-center justify-center bg-white">
                {/* Threads background */}
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
                </div>

                {/* SplitText Heading */}
                <div className="relative z-10 text-center px-4">
                    <SplitText
                        text="Latest Blog Updates"
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                        delay={80}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1} onLetterAnimationComplete={undefined}                    />
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Stay informed with our latest stories, updates, and insights.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                {/* Tabs Filter */}
                <Tabs
                    tabs={tabs}
                    activeTab={selectedCategory}
                    setActiveTab={setSelectedCategory}
                />

                {/* Blog Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {paginatedBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-xl shadow-md p-6 border border-red-300 hover:shadow-lg transition flex flex-col"
                        >
                            {/* Image */}
                            <div className="mb-4 overflow-hidden rounded-lg h-48">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold   text-gray-700 mb-2">{blog.title}</h3>

                           
    {/* Trimmed Description (10 words) */}
    <p className="text-gray-600 mb-4">
      {blog.description.split(' ').slice(0, 10).join(' ')}
      {blog.description.split(' ').length > 10 ? '...' : ''}
    </p>


                            {/* CTA */}
                            <div className='flex justify-center mt-auto'>
                                <button 
                                    className="cursor-pointer text-xs btn-shadow-red"
                                    onClick={() => handleReadMoreClick(blog)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        className="mt-12"
                    />
                )}
            </section>

            {/* Custom Blog Details Modal */}
         {isModalOpen && selectedBlog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop with medium blur */}
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md"
      onClick={closeModal}
    ></div>

    {/* Compact modal container */}
    <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      {/* Close button */}
      <button 
        onClick={closeModal}
        className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Content */}
      <div className="p-6">
        {/* Reduced size image */}
        <div className="mb-4 rounded-lg overflow-hidden h-48">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedBlog.title}</h2>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            <Tag className="w-3 h-3 mr-1 text-red-500" />
            {selectedBlog.category}
          </span>
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-red-500" />
            {selectedBlog.postedDate}
          </span>
          <div className="flex items-center flex-wrap gap-1">
            <Hash className="w-3 h-3 text-red-500" />
            {selectedBlog.hashtags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
         <div className="text-gray-700 mt-4">
        {selectedBlog.description}
      </div>

        {/* Footer with close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={closeModal}
            className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
    );
};
export default Blogs;