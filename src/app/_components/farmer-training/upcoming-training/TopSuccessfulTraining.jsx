"use client"
import { DateFormat } from "@/app/utils/DateFormat"
import Image from "next/image"
import { useRouter } from "next/navigation"


function TopSuccessfulTraining({ upcomingTraining }) {
    const router = useRouter()
    const applyBtn = () => {
        router.push("/farmer-training/apply-for-training")
    }
    const topVisibility=upcomingTraining?.pastEvents?.slice(0,4)
    return <>
        <h3>Top Successful Training</h3>
        {topVisibility && topVisibility.map((item, index) => (
            <div className="card mb-3" key={index}>
                <Image
                    src={`https://f2df.in${item.images[0]?.filePath}`}
                    alt={item.altTag || "News Image"}
                    width={200}
                    height={200}
                    className="card-img-top p-2"
                    style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />

                <div className="card-body">
                    <div>{item?.location} </div>
                    <div className="mt-4">
                        <button className="btn btn-primary btn-sm me-4">{DateFormat(item?.date)}</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { applyBtn() }}>Apply Now</button>
                    </div>
                </div>


            </div>
        ))}
        <div className="text-center">
            <button className="btn btn-primary">View More </button>
        </div>

    </>
}


export default TopSuccessfulTraining