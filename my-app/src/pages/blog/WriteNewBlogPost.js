import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";

export default function WriteNewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [chatgptTitleOrder, setChatgptTitleOrder] = useState("");
  const [chatgptContentOrder, setChatgptContentOrder] = useState("");
  const [chatgptTitleResponse, setChatgptTitleResponse] = useState("");
  const [chatgptContentResponse, setChatgptContentResponse] = useState("");

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

  const chatgptTitleSubmit = async (title) => {
    console.log(title);
    await axios
      .get(
        `http://127.0.0.1:8000/api/chatgpt/${title}¥n${chatgptTitleOrder}` + 
          "¥n 上の内容に沿ってブログ記事で使ういい感じのタイトルだけを返してください"
      )
      .then((res) => {
        console.log(res.data);
        setChatgptTitleResponse(res.data);
      });
  };

  const chatgptContentSubmit = async (content,title) => {
    console.log(content);
    await axios
      .get(
        `http://127.0.0.1:8000/api/chatgpt/${content}¥n` + 
          `¥n 上の記事の内容と記事タイトル:${title}と指示:${chatgptContentOrder}に沿って、タイトルは出力せずにブログ記事だけをHTML形式で返してください。また、スタイルはtailwindcssを使ってください。絶対に返信に「All rights reserved」や「署名」などは含めないでください`
      )
      .then((res) => {
        console.log(res.data);
        setChatgptContentResponse(res.data);
      });
  };
  
  useEffect(() => {
    console.log("これはchatgptTitleResponseです",chatgptTitleResponse);
    setTitle(chatgptTitleResponse);
  }, [chatgptTitleResponse]);

  useEffect(() => {
    console.log("これはchatgptContentResponseです",chatgptContentResponse);
    setContent(chatgptContentResponse);
  }, [chatgptContentResponse]);

  const kisyoutenketsu=()=>{
    setChatgptContentOrder(chatgptContentOrder + "記事を起承転結で書いてください。");
  }

  const modenStyle=()=>{
    setChatgptContentOrder(chatgptContentOrder + "HTMLのスタイルは可能な限りリッチでモダンなスタイルでお願いします。");
  }

  const Paragragh=(num)=>{
    setChatgptContentOrder(chatgptContentOrder + `${num}章立てで書いてください。`);
  }

  const numCharacter=(num)=>{
    setChatgptContentOrder(chatgptContentOrder + `${num}文字で執筆してください。`);
  }

  return (
    <Layout title="Blog page">
      <div className="w-full grid grid-cols-3 gap-4">
        <div>
        {/* 左の要素 */}
        <h1 className="text-green-400 mb-24 flex flex-col items-center text-4xl">Create a new post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-start m-4">
            <label className="text-white w-full">
              Title:
              <br />
              <textarea
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-2 border-gray-500 bg-white text-black"
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
            <button type="submit" className="border-2 border-gray-500 text-white rounded-full">
              Submit
            </button>
          </form>

        </div>
        <div>
          {/* 真ん中の要素 */}
          <h1 className="text-white mt-8 mb-20 text-xl flex flex-col items-center">ChatGPTへの指示</h1>
          <label className="text-white w-full">
              Titleのgptへの指示:
              <br />
              <textarea
                type="text"
                value={chatgptTitleOrder}
                onChange={(e) => setChatgptTitleOrder(e.target.value)}
                className="w-full border-2 border-gray-500 bg-white text-black mb-4"
              />
          </label>
          <br />
          <label className="text-white w-full">
              Contentのgptへの指示:
              <p>
                <textarea
                value={chatgptContentOrder}
                onChange={(e) => setChatgptContentOrder(e.target.value)}
                className="w-full border-2 border-gray-500 bg-white h-64 text-black"
                />
              </p>
          </label>
          <button className="border-2 border-gray-500 text-white" onClick={()=>kisyoutenketsu()}>起承転結で</button>
          <button className="border-2 border-gray-500 text-white ml-2" onClick={()=>modenStyle()}>モダンで</button>
          <button className="border-2 border-gray-500 text-white ml-2" onClick={()=>Paragragh(4)}>４章分</button>
          <button className="border-2 border-gray-500 text-white ml-2" onClick={()=>Paragragh(6)}>6章分</button>
          <button className="border-2 border-gray-500 text-white ml-2" onClick={()=>numCharacter(2000)}>2000字程度で</button>
          <button className="border-2 border-gray-500 text-white" onClick={()=>numCharacter(3000)}>3000字程度で</button>




        </div>

        <div className="flex flex-col items-center">
          {/* 右の要素 */}
          <h1 className="text-white mt-8 text-xl">Let's ChatGPT</h1>
          <button className="border-2 border-gray-500 text-white mt-24" onClick={()=>{chatgptTitleSubmit(title)}}>Title ChatGPT</button>
          <button className="border-2 border-gray-500 text-white mt-24" onClick={()=>{chatgptContentSubmit(content,title)}}>Content ChatGPT</button>
        </div>
      </div>
    </Layout>
  );
}
