import Carousel from "@/app/_components/Carousel";
import AllProducts from "@/app/_components/home-page/AllProducts";
import Counter from "@/app/_components/home-page/Counter";
import Heading from "@/app/_components/home-page/Heading";
import HeadingImage from "@/app/_components/home-page/HeadingImage";
import HotOffer from "@/app/_components/home-page/HotOffer";
import ProductList from "@/app/_components/home-page/ProductsList";
import RecommendedProducts from "@/app/_components/home-page/RecommendedProducts";
import SellerProducts from "@/app/_components/home-page/SellerProducts";
import TestimonialItems from "@/app/_components/home-page/TestimonialItems";
import TopNewsList from "@/app/_components/home-page/TopNewsList";

function HomePage(){
    return <>
    <Carousel/>
    <AllProducts/>
    <Heading/>
    <HeadingImage/>
    <TopNewsList/>
    <ProductList/>
    <Counter/>
    <RecommendedProducts/>
    <HotOffer/>
    <SellerProducts/>
    <TestimonialItems/>
    </>
}


export default HomePage;