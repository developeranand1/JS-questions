"use client";
import { useEffect, useState } from "react";


import { useRouter } from "next/navigation";
import TopNewsCards from "./TopNewsCard";
import { fetchAllNews } from "@/app/services/newsService";

function TopNewsLayout(){

     const router=useRouter();
        
        const [news, setNews] = useState([]);
    
        const fetchRecommendedList = async () => {
            try {
                const data = await fetchAllNews({page:1, size:10, searchKeyword:""});
                
                setNews(data?.news);
            } catch (error) {
                console.error("Error fetching Top News ", error);
            }
        };
    
        useEffect(() => {
            fetchRecommendedList();
        }, []);
    
    
        console.log(news)
        const openProductsList=()=>{
            router.push("/product/list")
        }
    
    return  <div className="container">
    <div className="row my-2">
        <div className="col-md-12">
            <h4 className="text-center my-3">
            Latest <span className="text-primary">News Feeds</span>
            </h4>
        </div>
    </div>

    <div className="row my-3">

        <TopNewsCards news={news} />
    </div>
    <div className="row my-3">
       <div className="col-md-12">
        <button className="float-end btn btn-outline-primary" onClick={openProductsList} > View All News </button>
       </div>
    </div>
</div>
}


export default TopNewsLayout;