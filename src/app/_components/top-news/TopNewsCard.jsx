"use client";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { LuUserCheck } from "react-icons/lu"
import styles from '../../styles/modules/TopNews.module.css'
import { FaTags } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { DateFormat } from "@/app/utils/DateFormat";


function TopNewsCards({ news }) {
    const router = useRouter();


    const openNewsDetailPage = (id) => {
        router.push("/krishi-darshan/news/details/" + id)
    }

    // krishi-darshan/news/details/
    return <>
        {news && news.length > 0 ? (
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
                {news.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card h-100">
                            <div className="position-absolute">
                                {item && (
                                    <span className="badge bg-danger position-relative ms-2" style={{ zIndex: "999", top: "10px" }}>
                                        <BsFillPatchCheckFill /> News
                                    </span>
                                )}
                            </div>

                            <div className="position-relative" style={{ width: "100%", height: "200px" }}>


                                <Image
                                    src={`https://f2df.in${item.images[0]?.filePath}`}
                                    alt={item.altTag || "News Image"}
                                    width={350}
                                    height={200}
                                    className="card-img-top p-1"
                                    style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                                />
                            </div>
                            <div className="card-body">
                                <div className={styles.F2DFTeamStyle}>
                                    <LuUserCheck className="me-1" /> F2DF
                                </div>
                                <h5 className={styles.newsHeadingStyle}>{item?.heading}</h5>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={styles.dateStyle}>
                                        <SlCalender className="me-1" />   {DateFormat(item?.createDate)}
                                    </div>

                                    <div className={styles.readMoreStyle} onClick={() => openNewsDetailPage(item?.id)}><FaTags className="me-1" /> Read More</div>

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
}


export default TopNewsCards;