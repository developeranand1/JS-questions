"use client"
import { useEffect, useState } from "react"
import Carousel from "../../Carousel"
import Counter from "../../home-page/Counter"
import UpcomingTrainingCard from "./UpcomingTrainingCard"
import { fetchUpcomingTraining } from "@/app/services/trainingService"
import TopSuccessfulTraining from "./TopSuccessfulTraining"


function UpcomingTrainingLayout(){
    const [upcomingTraining,setUpcomingTraining]=useState([]);

      const upcomingTrainingList = async () => {
            try {
                const data = await fetchUpcomingTraining();
               
                setUpcomingTraining(data);
            } catch (error) {
                console.error("Error fetching upcoming Training", error);
            }
        };
    
    useEffect(()=>{
        upcomingTrainingList()
    },[])
    return(<>
    <Carousel/>
    <div className="container-fluid my-5">
        <div className="row">
        <div className="col-md-9">
            <UpcomingTrainingCard upcomingTraining={upcomingTraining}/>
            </div>
            <div className="col-md-3">
               <TopSuccessfulTraining upcomingTraining={upcomingTraining}/>
            </div>
        </div>
    </div>
    <Counter/>
    </>)
}


export default UpcomingTrainingLayout