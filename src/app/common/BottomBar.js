import Link from "next/link"

export const BottomBar =()=>{
    return <>
   
    <div className="bg-warning py-2" >
        <div className="d-flex justify-content-between align-items-center">
            <div>
            All Rights Reserved <Link className="text-decoration-none text-dark" href="" target="_blank">F2DF Pvt. Ltd</Link>
            </div>
            <div>
            <Link className="text-decoration-none text-dark me-4" href="" target="_blank">F2DF Pvt. Ltd</Link>
            <Link className="text-decoration-none text-dark" href="" target="_blank">F2DF Pvt. Ltd</Link>
            </div>
        </div>
    </div>
    </>
}