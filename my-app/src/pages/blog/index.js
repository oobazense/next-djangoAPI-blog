import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { BlogList } from "@/components/BlogList";
import Layout from "@/components/Layout";

export default function Page({ articles }) {
  if (!articles) {
    return <div>データがありません</div>;
  }

  return (
    <Layout title="Blog page">
      <div>
        <BlogList articles={articles} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const ENDPOINT = "http://127.0.0.1:8000/api/posts/";
  const result = await fetch(ENDPOINT).then((res) => res.json());
  console.log(result);
  return { props: { articles: result } };
}
