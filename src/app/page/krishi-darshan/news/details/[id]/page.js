"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Carousel from '@/app/_components/Carousel';
import NewsDetail from '@/app/_components/NewsDetail';
import { getNewsById } from '@/app/services/newsService'; 
import Skeleton from '@/app/_components/loader/Skeleton';

const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const newsId = url.pathname.split('/').pop();
    if (newsId) fetchNews(newsId);
  }, []);

  const fetchNews = async (id) => {
    try {
      const data = await getNewsById(id); // ✅ using service
      setNewsData(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const defaultImage = '/default-og.jpg';
  const imageUrl = newsData?.images?.[0]?.filePath
    ? `https://f2df.in${newsData.images[0].filePath}`
    : defaultImage;

  return (
    <>
      {newsData && (
        <Head>
          <title>{newsData.title}</title>
          <meta name="description" content={newsData.description} />
          <meta name="keywords" content={newsData.keywords} />
          <meta name="author" content="F2DF" />

          {/* Open Graph */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={newsData.title} />
          <meta property="og:description" content={newsData.description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:alt" content={newsData.altTag} />
          <meta property="og:url" content={`https://f2df.in/news/${newsData.id}`} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={newsData.title} />
          <meta name="twitter:description" content={newsData.description} />
          <meta name="twitter:image" content={imageUrl} />
        </Head>
      )}
      <div>
        <Carousel />
        {!newsData ? (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-8">
        <Skeleton height="300px" />
        <Skeleton height="30px" width="60%" />
        <Skeleton height="20px" width="80%" />
        <Skeleton height="20px" width="90%" />
        <Skeleton height="100px" />
      </div>
      <div className="col-md-4">
        <Skeleton height="150px" />
        <Skeleton height="80px" />
      </div>
    </div>
  </div>
) : (
  <NewsDetail newsData={newsData} />
)}
      </div>
    </>
  );
};

export default NewsDetails;
