import React from 'react';
import { BookOpen } from 'lucide-react';

function Blog() {
  const blogs = [
    {
      title: "Mastering the Technical Interview",
      description: "Learn the key strategies to ace your next technical interview with confidence.",
      image: "https://source.unsplash.com/random/800x600?coding",
      date: "March 15, 2024"
    },
    {
      title: "Building Your Professional Network",
      description: "Discover effective ways to expand your professional network and create meaningful connections.",
      image: "https://source.unsplash.com/random/800x600?networking",
      date: "March 12, 2024"
    },
    {
      title: "Resume Writing Best Practices",
      description: "Expert tips on crafting a resume that stands out to recruiters and hiring managers.",
      image: "https://source.unsplash.com/random/800x600?resume",
      date: "March 10, 2024"
    },
    {
      title: "Navigating Remote Work Culture",
      description: "Tips and tricks for succeeding in a remote work environment.",
      image: "https://source.unsplash.com/random/800x600?remote-work",
      date: "March 8, 2024"
    },
    {
      title: "The Future of AI in Tech Jobs",
      description: "Exploring how AI is shaping the future of technology careers.",
      image: "https://source.unsplash.com/random/800x600?artificial-intelligence",
      date: "March 5, 2024"
    },
    {
      title: "Salary Negotiation Strategies",
      description: "Learn how to effectively negotiate your salary and benefits package.",
      image: "https://source.unsplash.com/random/800x600?business",
      date: "March 1, 2024"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Career Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">
                {blog.description}
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-800">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;