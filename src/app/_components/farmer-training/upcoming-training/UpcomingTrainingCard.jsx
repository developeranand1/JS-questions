"use client"
import { DateFormat } from "@/app/utils/DateFormat"
import Image from "next/image"
import { useRouter } from "next/navigation"


function UpcomingTrainingCard({ upcomingTraining }) {
    const router=useRouter()
    const applyBtn= ()=>{
        router.push("/farmer-training/apply-for-training")
    }
    console.log("upcoming-Training Received", upcomingTraining)
    return <>
    <h3>Upcoming Training</h3>
        {upcomingTraining?.upcomingEvents && upcomingTraining?.upcomingEvents.map((item, index) => (
            // <div className="col-md-9" key={index}>
                <div className="card mb-3" key={index}>
                    <div className="row">
                        <div className="col-md-4">
                        <Image
                        src={`https://f2df.in${item.images[0]?.filePath}`}
                        alt={item.altTag || "News Image"}
                        width={200}
                        height={200}
                        className="card-img-top p-2"
                        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                    />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h4>{item?.heading} </h4>
                        <p>{item?.content} </p>
                        <div>{item?.location} </div>
                        <div className="mt-4">
                            <button className="btn btn-primary btn-sm me-4">{DateFormat(item?.date)}</button>
                            <button className="btn btn-outline-secondary btn-sm" onClick={()=>{applyBtn()}}>Apply Now</button>
                        </div>
                            </div>
                        
                        </div>
                    </div>
                   
                    
                </div>
            // </div>
        ))}

    </>
}


export default UpcomingTrainingCard