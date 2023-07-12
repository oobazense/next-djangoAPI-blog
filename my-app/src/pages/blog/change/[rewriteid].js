import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "@/components/Layout";
import { useState } from "react";

const ENDPOINT = "http://127.0.0.1:8000/api/posts/";

export default function ReWrite({ article }) {
  const router = useRouter();
  const [title, setTitle] = useState(`${article.title}`);
  const [content, setContent] = useState(`${article.content}`);
  const [firstView, setFirstView] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    try {
      const response = await axios.put(`${ENDPOINT}${article.id}/`, formData);

      setFirstView(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout title="Blog page">
        <div className="flex flex-col items-center text-3xl p-8 w-screen">
          ID = {article.id}
          <form onSubmit={handleSubmit} className="w-full max-w-8xl">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 my-2"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 my-2"
              rows="100"
            />

            <button
              type="submit"
              className="border-2 border-gray-500 text-white rounded-full mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const result = await fetch(ENDPOINT).then((res) => res.json());
  if (!result) return;

  //アクセスパスからrewriteidがキャッチされる
  const paths = result.map((article) => ({
    params: { rewriteid: `${article.id}` },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await fetch(`${ENDPOINT}${params.rewriteid}`).then((res) =>
    res.json()
  );
  console.log(result);
  return { props: { article: result } };
}
