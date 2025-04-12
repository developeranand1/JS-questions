"use client";
import { useEffect, useState } from "react";
import { fetchAllBanner } from "@/app/services/bannerService";
import { useRouter } from "next/navigation";
import AllProductsCard from "./AllProductCard";


function AllProductsList() {

    const router=useRouter();
    
    const [allProducts, setAllProducts] = useState([]);

    const fetchRecommendedList = async () => {
        try {
            const data = await fetchAllBanner();
            const filteredProducts = data?.allProducts || [];
            setAllProducts(filteredProducts);
        } catch (error) {
            console.error("Error fetching allProducts:", error);
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
                    All <span className="text-primary">Products</span>
                    </h4>
                </div>
            </div>

            <div className="row my-3">
               

                <AllProductsCard allProducts={allProducts}/>
            </div>
            <div className="row my-3">
               <div className="col-md-12">
                <button className="float-end btn btn-outline-primary" onClick={()=>{openProductsList}} > View All Recommended Products </button>
               </div>
            </div>
        </div>
    );
}

export default AllProductsList;
