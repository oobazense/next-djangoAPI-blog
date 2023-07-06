import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Index = () => {
  const ENDPOINT = "http://127.0.0.1:8000/api/posts/";
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(ENDPOINT);
        console.log(res.data);
        setResult(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="text-3xl font-bold underline text-green-400">
      index
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}

export default Index;
