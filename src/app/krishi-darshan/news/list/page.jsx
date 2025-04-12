import Carousel from "@/app/_components/Carousel"
import { News } from "@/app/_components/News"
import { TagName } from "@/app/_components/TagName"
import Link from "next/link"

 const NewList=()=>{
    return <>
        <Carousel/>
     <News/>
    </>
}

export default NewList;