"use client";
import { formatPriceINR } from "@/app/utils/formatPrice";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";

function SellerProductsCard({ seller }) {
    return (
        <>
            {seller && seller.length > 0 ? (
                seller.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                    
                        <div className="card h-100">
                            <div className="position-absolute">
                            {item.assured && <span className="badge bg-danger position-relative ms-2" style={{zIndex:"999",top:'10px'}}><BsFillPatchCheckFill/> Assured</span>}
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
                                <p className="card-text">{formatPriceINR(item?.productFee)} </p>
                                

                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-outline-secondary btn-sm">Buy Now </button>
                                    <button className="btn btn-primary btn-sm"> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">No seller products found.</div>
            )}
        </>
    );
}

export default SellerProductsCard;
