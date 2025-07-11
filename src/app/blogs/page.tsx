'use client';

import React, { useState } from 'react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import { blogsData, categories } from '@/data/blogsData';
import { Tabs } from '@/components/ui/Tabs';
import { BookOpen } from 'lucide-react';
import { Pagination } from '@/components/Pagination';

const BLOGS_PER_PAGE = 5; // Number of blogs to show per page

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

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

    // Reset to page 1 when category changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    return (
        <div className="text-black">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[300px] mt-20 overflow-hidden flex items-center justify-center bg-white">
                {/* Threads background */}
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
                </div>

                {/* SplitText Heading */}
                <div className="relative z-10 text-center px-4">
                    <SplitText
                        text="Latest Blog Updates"
                        className="text-4xl md:text-6xl font-bold text-gray-900"
                        delay={80}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1} onLetterAnimationComplete={undefined}                    />
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
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
                            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition flex flex-col"
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
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">{blog.description}</p>

                            {/* CTA */}
                            <button className="mt-auto text-red-600 hover:underline font-medium">
                                Read More →
                            </button>
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
        </div>
    );
};

export default Blogs;