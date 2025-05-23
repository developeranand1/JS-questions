

"use client";
import { useEffect, useState } from "react";
import RecommendedProductsCard from "./RecommendedProductsCard";
import { fetchAllBanner } from "@/app/services/bannerService";
import { useRouter } from "next/navigation";

function RecommendedProductsList() {

    const router=useRouter();
    
    const [recommended, setRecommended] = useState([]);

    const fetchRecommendedList = async () => {
        try {
            const data = await fetchAllBanner();
            const filteredProducts = data?.recommdedProducts?.filter(item => item.recommended === true) || [];
            setRecommended(filteredProducts);
        } catch (error) {
            console.error("Error fetching recommended products:", error);
        }
    };

    useEffect(() => {
        fetchRecommendedList();
    }, []);


    // product/list

    const openProductsList=()=>{
        router.push("/product/list")
    }

    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-md-12">
                    <h4 className="text-center my-3">
                        Recommended <span className="text-primary">Products List</span>
                    </h4>
                </div>
            </div>

            <div className="row my-3">
                <RecommendedProductsCard recommended={recommended} />
            </div>
            <div className="row my-3">
               <div className="col-md-12">
                <button className="float-end btn btn-outline-primary" onClick={openProductsList} > View All Recommended Products </button>
               </div>
            </div>
        </div>
    );
}

export default RecommendedProductsList;
