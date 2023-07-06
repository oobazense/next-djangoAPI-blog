import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "@/components/Layout";

const ENDPOINT = "http://127.0.0.1:8000/api/posts/";

export default function Detail({ article }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title="Blog page">
      <div className="flex flex-col items-center text-3xl p-8">
        ID = {article.id}
        <h2 className="text-white text-4xl p-8">{article.title}</h2>
        <p className="text-white text-xl p-8">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </p>
        
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const result = await fetch(ENDPOINT).then((res) => res.json());
  if (!result) return;

  const paths = result.map((article) => ({
    params: { detail: `${article.id}` },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await fetch(`${ENDPOINT}${params.detail}`).then((res) =>
    res.json()
  );
  console.log(result);
  return { props: { article: result } };
}
