import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface BlogPost {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
}

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://patronai.wordpress.com/wp-json/wp/v2/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4" 
          dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div className="prose max-w-none"
           dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}