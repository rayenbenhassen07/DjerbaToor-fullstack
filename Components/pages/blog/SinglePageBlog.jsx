"use client"; // needed for client-side fetch
import React, { useState, useEffect } from "react";

const SinglePageBlog = ({ slug }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the blog data");
        }
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogData) {
    return <div>No blog found</div>;
  }

  const {
    title,
    short_description,
    long_description,
    author,
    creadted_at,
    image,
  } = blogData.data[0];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-600">
        By {author} | {new Date(creadted_at).toLocaleDateString()}
      </p>

      <div className="my-4">
        <p
          className="mb-4 text-base"
          dangerouslySetInnerHTML={{ __html: short_description }}
        ></p>
      </div>

      <div className="w-full my-6">
        <img
          src={`http://75.119.130.218:8055/assets/${image}`} // replace with the correct image URL
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className="my-6">
        <p
          className="text-base"
          dangerouslySetInnerHTML={{ __html: long_description }}
        ></p>
      </div>
    </div>
  );
};

export default SinglePageBlog;
