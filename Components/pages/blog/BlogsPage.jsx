"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ModernFooter from "@/Components/ModernFooter";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.data); // Adjust based on your API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-800 pt-8 ">
      <div className="px-8 min-h-screen">
        <header className="text-start mb-8 ">
          <h1 className="text-3xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-lg text-gray-400">
            Welcome to our blog! Here you'll find the latest updates, tips, and
            stories. Browse through our posts to stay informed and inspired.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-4 lg:p-4 my-4 mx-2 lg:mx-6">
          {blogs.length === 0 ? (
            <div>No blogs found</div>
          ) : (
            blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id}>
                <div className="p-4  cursor-pointer h-64 lg:h-full ">
                  <div>
                    <Image
                      src={`http://75.119.130.218:8055/assets/${blog.image}`}
                      alt={blog.title}
                      width={300}
                      height={300}
                      className="h-40 w-60 lg:h-60 lg:w-96 object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <h2 className="p-2 font-semibold text-xs lg:text-sm text-white">
                    {blog.title}
                  </h2>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <footer className="from-neutral-700 text-white w-full">
        <ModernFooter />
      </footer>
    </div>
  );
};

export default BlogsPage;
