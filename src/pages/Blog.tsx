import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://patronai.wordpress.com/wp-json/wp/v2/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} 
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div className="text-gray-600"
                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </Link>
        ))}
      </div>
    </div>
  );
}