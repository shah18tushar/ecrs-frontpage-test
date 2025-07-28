import React, { useState, useEffect } from "react";
import { ChevronRight, Briefcase } from "lucide-react";
import CareersPostsDialog from "./CareersPostsDialog";
import MagnifierCursor from "../MagnifierCursor";

const CareersPosts = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const jobPosts = [
    {
      id: 1,
      category_name: "staff",
      title: "Marketing Manager",
      description:
        "Join our dynamic team to build exceptional user interfaces using modern React technologies. You'll work on creating responsive, accessible, and performant web applications that serve millions of users.",
      location: "Mumbai, India",
      keySkills: "React, TypeScript, Tailwind CSS, Redux",
      qualification: "B.Tech Computer Science",
      experience: "2‑4 years",
      postedAt: "2025‑07‑25",
      department: "Sales & Marketing",
      type: "Full-time",
      salary: "₹8-15 LPA",
      remote: false,
      company: "TechCorp Solutions",
    },
    {
      id: 2,
      category_name: "driver",
      title: "Operations Manager",
      description:
        "Design and implement scalable APIs and microservices architecture for our enterprise platform. Lead technical decisions and mentor junior developers while ensuring high performance and reliability.",
      location: "Bangalore, India",
      keySkills: "Node.js, Python, MongoDB, AWS, Docker",
      qualification: "B.Tech/M.Tech Computer Science",
      experience: "4‑7 years",
      postedAt: "2025‑07‑24",
      department: "Operations",
      type: "Full-time",
      salary: "₹15-25 LPA",
      remote: true,
      company: "InnovateTech",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

      const text = "Join Our Team";


  return (
    <div className="">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">
            <MagnifierCursor text={text} cursorSize={40} />
          </h1>
          <p className=" text-red-500 font-light text-lg italic max-w-2xl mx-auto">
            Explore exciting career opportunities and be part of our mission to
            build innovative, future-ready technology-driven solutions.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobPosts.map((job, index) => (
            <div
              key={job.id}
              className={`group bg-white border rounded-xl p-6 hover:shadow-lg hover:border-red-500 border-red-400 transition-all duration-1000 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedJob(job)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {job.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Department Badge */}
              <div className="flex justify-between mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                  {job.department}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-gray-500 text-xs font-medium">
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                {job.description}
              </p>

              {/* Footer */}
              {/* <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-medium">
                    {job.type}
                  </span>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Job Detail Dialog */}
      <CareersPostsDialog
        selectedJob={selectedJob}
        onClose={() => setSelectedJob(null)}
        formatDate={formatDate}
      />
    </div>
  );
};
export default CareersPosts;