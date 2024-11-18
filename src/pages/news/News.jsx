import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            // params: {
            //   country: "us",
            //   apiKey: "954f9dc6e00c432f82b23da470a121ac",
            // },

            params: {
              sources: "the-hindu, the-times-of-india, bbc-news",
              apiKey: "954f9dc6e00c432f82b23da470a121ac",
            },
          }
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news data", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-xl font-bold mt-20">Loading news...</p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mx-5 mb-10">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
