import React, { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";

export default function WriteNewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/posts/",
        formData
      );
      console.log(response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Layout title="Blog page">
      <div className="w-full">
        <h1 className="text-white mb-8 flex flex-col items-center">Create a new post</h1>
        <form onSubmit={handleSubmit} className="w-3/2 flex flex-col items-start">
          <label className="text-white w-full">
            Title:
            <p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 bg-current w-3/2"
            />
            </p>
          </label>
          <br />
          <label className="text-white w-full">
            Content:
            <p>
              <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-gray-500 bg-currentw-3/2 h-64"
              />
            </p>
          </label>
          <br />
          <button type="submit" className="border-2 border-gray-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
