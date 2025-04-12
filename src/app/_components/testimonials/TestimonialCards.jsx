"use client";
import "../../styles/media-query/testimonials/testimonial.css";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { fetchAllTestimonial } from "@/app/services/testimonialServices";

function TestimonialCards() {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = await fetchAllTestimonial();
    setTestimonial(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Helper to toggle "Read More" state
  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle individual card
    }));
  };

  // Helper to shorten long text
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Our Clients</h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
      >
        {testimonial.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card testimonial-card h-100 d-flex flex-column">
              <blockquote className="blockquote">
                <p className="testimonial-desc">
                  {expandedCards[index]
                    ? item?.desc
                    : truncateText(item?.desc, 100)}
                </p>
                {item?.desc?.length > 100 && (
                  <button
                    className="btn btn-link p-0 float-end"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedCards[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </blockquote>
              <div className="d-flex align-items-center mt-auto">
                <div
                  style={{
                    width: 50,
                    height: 50,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <Image
                  className="user-img"
                    src={`https://f2df.in${item?.img?.startsWith("/") ? item.img : `/${item.img}`}`}
                    alt={item?.name || "User"}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="ms-3">
                  <strong className="user-name">{item?.name}</strong>
                  <br />
                  <small className="text-muted user-designation">{item?.degination}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialCards;
