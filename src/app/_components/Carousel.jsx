// "use client"
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { fetchAllBanner } from "../services/bannerService";

// const Carousel = () => {

//   const [images, setImages]=useState([]);
//   useEffect(()=>{
//     fetchBannerImages();
//   },[]);


//   const fetchBannerImages=async()=>{
//     const data=await fetchAllBanner();

//     setImages(data)
//     if(data?.bannerList){
//       const banners=data.bannerList.map((item) =>item.img);
//       setImages(banners);
//     }
//     else{
//       console.warn("no banner data received!");
//     }
//   }



//   if(images.length ===0) return <div>Loading....</div>

//   return (
//     <div className="container-fluid">
//     <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">
//         {images.map((img, index) => (
//           <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{ position: "relative", width: "100%", height: "500px" }}>
//             <Image
//               src={`https://f2df.in/${img}`}
//               alt={`Slide ${index + 1}`}
//               fill
//               style={{ objectFit: "cover",width:'100%' }}
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

 
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       </button>

//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Carousel;



"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAllBanner } from "../services/bannerService";
import styles from "../styles/media-query/carousel/carousel.module.css"
const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchBannerImages();
  }, []);

  const fetchBannerImages = async () => {
    const data = await fetchAllBanner();

    if (data?.bannerList) {
      const banners = data.bannerList.map((item) => item.img);
      setImages(banners);
    } else {
      console.warn("No banner data received!");
    }
  };

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <div className={`container-fluid ${styles.carouselContainer}`}>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""} ${styles.carouselItem}`}
            >
              <Image
                src={`https://f2df.in/${img}`}
                alt={`Slide ${index + 1}`}
                fill
                className={styles.image}
                loading="lazy"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

