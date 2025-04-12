

"use client";

import { useEffect, useState, useCallback } from "react";
import { fetchAllProducts } from "@/app/services/productsService";
import Image from "next/image";
import { formatPriceINR } from "@/app/utils/formatPrice";
import styles from "../../styles/modules/Product.module.css";

// Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await fetchAllProducts({ brandName });
    setProducts(data?.data || []);
    setLoading(false);
  }, [brandName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="container-fluid my-2">
        <h3 className=" text-center my-4">Papular <span className="text-primary">Products</span></h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm h-100">
                <div style={{ position: "relative", height: "180px" }}>
                  <Image
                    src={`https://f2df.in${product.img1}`}
                    alt={product.altTag || "Image"}
                    fill
                    style={{ objectFit: "cover" }}
                    className="card-img-top p-2"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className={styles.productName}>{product.productName}</h5>
                  <div className="mb-2">
                    <span className={styles.productFee}>
                      {formatPriceINR(product.productFee)}
                    </span>{" "}
                    <span className={styles.oldFee}>
                      {formatPriceINR(product?.oldFee)}
                    </span>
                  </div>
                  <button className="btn btn-primary w-100 btn-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductList;
