

"use client";
import { useEffect, useState } from "react";

import { fetchAllBanner } from "@/app/services/bannerService";
import { useRouter } from "next/navigation";
import SellerProductsCard from "./SellerProductsCard";

function SellerProductsList() {

    const router=useRouter();
    
    const [seller, setSeller] = useState([]);

    const fetchRecommendedList = async () => {
        try {
            const data = await fetchAllBanner();
            const filteredProducts = data?.bestSellingProducts || [];
            setSeller(filteredProducts);
        } catch (error) {
            console.error("Error fetching recommended products:", error);
        }
    };

    useEffect(() => {
        fetchRecommendedList();
    }, []);


    const openProductsList=()=>{
        router.push("/product/list")
    }

    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <h4 className="text-center my-3">
                    Best <span className="text-primary">Seller Products</span>
                    </h4>
                </div>
            </div>

            <div className="row my-3">
                {/* <RecommendedProductsCard recommended={recommended} /> */}

                <SellerProductsCard seller={seller}/>
            </div>
            <div className="row my-3">
               <div className="col-md-12">
                <button className="float-end btn btn-outline-primary" onClick={openProductsList} > View All Recommended Products </button>
               </div>
            </div>
        </div>
    );
}

export default SellerProductsList;
