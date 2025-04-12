"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TagName } from "./TagName";
import { DropMessage } from "./DropMessage";
import { fetchAllNews } from "../services/newsService";

export const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchKeyword,setSearchKeyword]=useState("");
  const pageSize = 10;


  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
     
  
      const data = await fetchAllNews({page,size:pageSize,searchKeyword})
      const newsData = data.news || [];
      setNews(newsData);
      setHasNextPage(newsData.length === pageSize);
    } catch (err) {
      setError("Failed to load news");
    } finally {
      setLoading(false);
    }
  }, [page, searchKeyword]); // ✅ include searchKeyword here
  
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      setPage(prev => prev + 1);
    }
  };

  const handleTagClick=(tag)=>{
    setSearchKeyword(tag);
    setPage(1);
  }

  if (loading) return <div className="text-center my-4">Loading news...</div>;
  if (error) return <div className="text-danger text-center my-4">{error}</div>;

  return (
    <div className="container my-4">

      <div className="row">

        <div className="col-md-8">
      <div className="row">
      <div className="btn btn-success w-100  mb-4">
                Latest News
                </div>
        {news.map((item) => (
          <div key={item.id} className=" col-md-6 mb-4">
            <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
              <div className="position-relative">
                <Image
                  src={`https://f2df.in${item.images[0]?.filePath}`}
                  alt={item.altTag || "News Image"}
                  width={350}
                  height={200}
                  className="card-img-top p-2"
                  style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />
                <span
                  className="badge bg-warning text-dark position-absolute"
                  style={{ top: "10px", right: "10px", fontSize: "12px" }}
                >
                  NEW
                </span>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-person text-success me-1"></i>
                  <span className="text-muted">By: <strong>F2DF</strong></span>
                  <Link href="#" className="ms-auto">
                    <i className="bi bi-whatsapp text-success fs-5"></i>
                  </Link>
                </div>
                <p className="mb-2 text-dark fw-bold">{item.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    <i className="bi bi-calendar me-1"></i> {new Date(item.createDate).toDateString()}
                  </small>
                  <Link
                    href={`/krishi-darshan/news/details/${item.id}`}
                    className="text-primary fw-bold text-decoration-none"
                  >
                    <i className="bi bi-book me-1"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
           <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={handlePrev}
          disabled={page === 1}
        >
          ← Previous
        </button>

        <span className="text-muted">Page {page}</span>

        <button
          className="btn btn-outline-primary"
          onClick={handleNext}
          disabled={!hasNextPage}
        >
          Next →
        </button>
      </div>
      </div>
        </div>


        <div className="col-md-4">

          <TagName onTagClick={handleTagClick}/>
          <DropMessage/>
        </div>
     
      </div>

 
   
    </div>
  );
};
