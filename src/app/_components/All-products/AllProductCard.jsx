"use client";
import { formatPriceINR } from "@/app/utils/formatPrice";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AllProductsCard({ allProducts }) {
    return (
        <>
            {allProducts && allProducts.length > 0 ? (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, // Slide every 3 seconds
                        disableOnInteraction: false, // Keeps autoplay running even after interaction
                    }}
                    loop={true} // Optional: makes the slider loop infinitely
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {allProducts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card h-100">
                                <div className="position-absolute">
                                    {item.assured && (
                                        <span className="badge bg-danger position-relative ms-2" style={{ zIndex: "999", top: "10px" }}>
                                            <BsFillPatchCheckFill /> Assured
                                        </span>
                                    )}
                                </div>

                                <div className="position-relative" style={{ width: "100%", height: "200px" }}>
                                    <Image
                                        src={`https://f2df.in${item?.img1?.startsWith("/") ? item.img1 : `/${item.img1}`}`}
                                        alt={item?.productName || "Product Image"}
                                        fill
                                        className="card-img-top p-3"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item?.productName}</h5>
                                    <p className="card-text">{formatPriceINR(item?.productFee)}</p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <button className="btn btn-outline-secondary btn-sm">Buy Now</button>
                                        <button className="btn btn-primary btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="col-12 text-center">No All Products found.</div>
            )}
        </>
    );
}

export default AllProductsCard;
