

"use client";

import { useEffect, useState, useCallback } from "react";
import { fetchAllProducts } from "@/app/services/productsService";
import Image from "next/image";
import Link from "next/link";
import { formatPriceINR } from "@/app/utils/formatPrice";
import styles from "../../styles/modules/Product.module.css"

export const ProductItemCards = () => {
    const [products, setProducts]=useState([]);
  const [page, setPage] = useState(1);
  const [brandName, setBrandName] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const pageSize = 10;

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await fetchAllProducts({ brandName });

    const newsList = data || [];
    console.log("📝 Final news data:", newsList.data);
    setProducts(newsList.data);
    console.log(products)
    setLoading(false);
  }, [brandName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
  
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row mt-3">
          {products.map((item,index) => (
            <div key={index} className="col-md-4 mb-3">
              <Link href={`/product/${item?.p_id}`}>
              <div className={`${styles.productCards} card`}>
                <Image
                  src={`https://f2df.in${item.img1}`}
                  alt={item.altTag || "Image"}
                  width={350}
                  height={200}
                  className="card-img-top p-2"
                />
                <div className="card-body">
                  <h5 className={styles.productName}>{item.productName}</h5>
                
                  <div className="mb-2">
                 <span className={styles.productFee}> {formatPriceINR(item.productFee)}  </span>   <span className={styles.oldFee}>{formatPriceINR(item?.oldFee)}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                  <Link href={`/product/${item?.p_id}`} className="btn btn-primary btn-sm">
                    Add Cart
                  </Link>
                  <Link href={`/product/${item.id}`} className="btn btn-outline-primary btn-sm">
                    Buy Now
                  </Link>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-between my-4">
        <button className="btn btn-outline-primary" onClick={() => setPage(p => p - 1)} disabled={page === 1}>
          ← Prev
        </button>
        <span>Page {page}</span>
        <button className="btn btn-outline-primary" onClick={() => setPage(p => p + 1)} disabled={!hasNextPage}>
          Next →
        </button>
      </div>
    </div>
  );
};


// "use client";

// import { useEffect, useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { fetchAllProducts } from "@/app/services/productsService";


// export const  ProductItemCards= () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [brandName,setBrandName]=useState("");
//   const pageSize = 10;


//   const fetchNews = useCallback(async () => {
//     setLoading(true);
//     try {
//       const data = await fetchAllProducts({page,size:pageSize,brandName})
//       const newsData = data.news || [];
//       setNews(newsData);
//       setHasNextPage(newsData.length === pageSize);
//     } catch (err) {
//       setError("Failed to load news");
//     } finally {
//       setLoading(false);
//     }
//   }, [page, brandName]); // ✅ include searchKeyword here
  
//   useEffect(() => {
//     fetchNews();
    
//   }, [fetchNews]);



 
  
// //   useEffect(() => {
// //     fetchNews();
// //   }, [fetchNews]);

//   const handlePrev = () => {
//     if (page > 1) {
//       setPage(prev => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     if (hasNextPage) {
//       setPage(prev => prev + 1);
//     }
//   };

//   const handleTagClick=(tag)=>{
//     setBrandName(tag);
//     setPage(1);
//   }

//   if (loading) return <div className="text-center my-4">Loading news...</div>;
//   if (error) return <div className="text-danger text-center my-4">{error}</div>;

//   return (
//   <>
//   <div className="row mt-4">
//     {news.map((item) => (
//           <div key={item.id} className=" col-md-4 mb-4">
//             <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
//               <div className="position-relative">
//                 <Image
//                   src={`https://f2df.in${item.images[0]?.filePath}`}
//                   alt={item.altTag || "News Image"}
//                   width={350}
//                   height={200}
//                   className="card-img-top"
//                   style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
//                 />
//                 <span
//                   className="badge bg-warning text-dark position-absolute"
//                   style={{ top: "10px", right: "10px", fontSize: "12px" }}
//                 >
//                   NEW
//                 </span>
//               </div>
//               <div className="card-body">
//                 <div className="d-flex align-items-center mb-2">
//                   <i className="bi bi-person text-success me-1"></i>
//                   <span className="text-muted">By: <strong>F2DF</strong></span>
//                   <Link href="#" className="ms-auto">
//                     <i className="bi bi-whatsapp text-success fs-5"></i>
//                   </Link>
//                 </div>
//                 <p className="mb-2 text-dark fw-bold">{item.title}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <small className="text-muted">
//                     <i className="bi bi-calendar me-1"></i> {new Date(item.createDate).toDateString()}
//                   </small>
//                   <Link
//                     href={`/krishi-darshan/news/details/${item.id}`}
//                     className="text-primary fw-bold text-decoration-none"
//                   >
//                     <i className="bi bi-book me-1"></i> Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//            <div className="d-flex justify-content-between align-items-center mt-4">
//         <button
//           className="btn btn-outline-primary"
//           onClick={handlePrev}
//           disabled={page === 1}
//         >
//           ← Previous
//         </button>

//         <span className="text-muted">Page {page}</span>

//         <button
//           className="btn btn-outline-primary"
//           onClick={handleNext}
//           disabled={!hasNextPage}
//         >
//           Next →
//         </button>
//       </div>
//       </div>
//   </>
//   );
// };
