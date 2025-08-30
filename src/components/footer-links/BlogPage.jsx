import React from 'react';
import './BlogPage.css';

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
    <div className="blog-container">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">Home</a> &gt; <span className="breadcrumb-current">Blogs</span>
      </nav>

      <h1 className="blog-title">Photography Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={`./public/blog/image${index + 1}.jpg`} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <p className="blog-category">{blog.category}</p>
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
