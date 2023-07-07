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

  const chatgptSubmit = async () => {
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
      <div className="w-full grid grid-cols-3 gap-4">
        <div>
          <h1 className="text-white mt-8 flex flex-col items-center text-xl">Let's ChatGPT</h1>
          <button className="border-2 border-gray-500 text-white" onClick={chatgptSubmit}>ChatGPT</button>
        </div>
        <div>
          <h1 className="text-white mb-8 flex flex-col items-center text-4xl">Create a new post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-start m-4">
            <label className="text-white w-full">
              Title:
              <br />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-2 border-gray-500 bg-white  text-black"
              />
            </label>
            <br />
            <label className="text-white w-full">
              Content:
              <p>
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border-2 border-gray-500 bg-white h-64 text-black"
                />
              </p>
            </label>
            <br />
            <button type="submit" className="border-2 border-gray-500 text-white">
              Submit
            </button>
          </form>
        </div>
        <div>右のカラムの内容をここに追加</div>
      </div>
    </Layout>
  );
}
