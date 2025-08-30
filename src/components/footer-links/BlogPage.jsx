import React from 'react';

const BlogPage = () => {
  const blogs = [
    {
      title: "The Photographer’s Guide to Finding a Specific Face in Old Photos",
      date: "Aug 28, 2025",
      category: "Photography",
      description: "Learn how you can find a specific face in old photos using advanced AI tools.",
    },
    {
      title: "How a Face Identification App Helps Find Every Guest Photo",
      date: "Aug 28, 2025",
      category: "Photography",
      description: "Understand how face recognition apps can help find every guest photo from an event.",
    },
    {
      title: "Fastest Ways to Share Pictures with Clients Without Losing Quality",
      date: "Aug 28, 2025",
      category: "Photography",
      description: "Discover the fastest methods to share high-quality pictures with clients.",
    },
    {
      title: "How AI Revolutionized Photography Workflow",
      date: "Aug 29, 2025",
      category: "Photography",
      description: "Learn about how AI tools are transforming the photography industry and workflow.",
    },
    {
      title: "Top 5 Photography Tips for Beginners",
      date: "Aug 29, 2025",
      category: "Photography",
      description: "Simple tips to get you started with photography and improve your skillset.",
    },
    {
      title: "Best Cameras for Outdoor Photography in 2025",
      date: "Aug 29, 2025",
      category: "Photography",
      description: "Explore the best camera options for outdoor photography for both amateurs and professionals.",
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-[100px] px-5 font-['Arial',sans-serif] opacity-0 translate-y-5 animate-[blogFadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]">
      <nav className="text-[0.9rem] text-[#999] mb-5">
        <a href="/" className="text-[#ccc] no-underline hover:text-[#7a7a7a]">Home</a> &gt; <span className="font-bold text-[#3b4454]">Blogs</span>
      </nav>

      <h1 className="text-[2rem] font-bold mb-5 text-black text-center">Photography Blogs</h1>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
            <img src={`./public/blog/image${index + 1}.jpg`} alt={blog.title} className="w-full h-[200px] object-cover" />
            <div className="p-[15px]">
              <p className="text-[0.9rem] text-[#6c757d] mb-[5px]">{blog.category}</p>
              <p className="text-[0.9rem] text-[#6c757d] mb-[10px]">{blog.date}</p>
              <h3 className="text-[1.25rem] font-semibold mb-[10px] text-[#333]">{blog.title}</h3>
              <p className="text-base leading-[1.6] mb-[15px] text-[#495763]">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
