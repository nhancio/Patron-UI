import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with AI Development",
    image: "/blog-images/ai-dev.jpg", 
    link: "https://patronai.wordpress.com/article-1"
  },
  {
    id: 2,
    title: "Understanding Machine Learning Basics",
    image: "/blog-images/ml-basics.jpg",
    link: "https://patronai.wordpress.com/article-2"
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <span className="text-blue-600">Read full article →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}