"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchAllNews } from "@/app/services/newsService";



export const TopNewsPost=()=>{
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
         
      
          const data = await fetchAllNews({page,size:10,searchKeyword})
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
      
    
      if (loading) return <div className="text-center my-4">Loading news...</div>;
      if (error) return <div className="text-danger text-center my-4">{error}</div>;
    return <>
     <div className="card mt-3">
        <div className="card-body">
            <div className="border-start border-3 border-success ps-2 mb-4">Top Latest News</div>
        {news.map((item) => (
  
            <div key={item.id} className="card shadow-sm mb-3" style={{ borderRadius: "10px" }}>
              <div className="position-relative">
                <Image
                  src={`https://f2df.in${item.images[0]?.filePath}`}
                  alt={item.altTag || "News Image"}
                  width={350}
                  height={200}
                  className="card-img-top"
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
    
        ))}
        </div>
        </div>
    
    </>
}