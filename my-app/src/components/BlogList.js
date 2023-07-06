import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export const BlogList = (props) => {
  const { articles } = props;
  console.log(articles);

  return (
    <div className="text-3xl font-bold text-green-400">
      <h2 className="flex flex-col items-center text-3xl p-8">記事一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles
          .slice()
          .reverse()
          .map((article, index) => (
            <Link href={`/blog/${article.id}`} key={index} className="m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
                {/* <Image
                src="http://127.0.0.1:8000/images/avatar.jpg"
                alt="description"
                className="object-cover w-full h-64"
                /> */}
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">
                    {article.title}
                  </h5>
                  <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400 overflow-ellipsis overflow-hidden h-20">
                    {article.content}
                  </p>
                </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
