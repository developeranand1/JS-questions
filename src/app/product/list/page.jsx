import { ProductItemCards } from "@/app/_components/products/ProductItemCards"
import { SearchProduct } from "@/app/_components/products/SearchProducts"
import { TopProductCategory } from "@/app/_components/products/TopProductCategory"
import Link from "next/link"

function ProductList(){
    return <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <SearchProduct/>
                <TopProductCategory/>
                <Link href={'/product/32323'}>sdds</Link>

            </div>
            <div className="col-md-8">
                <ProductItemCards/>
            </div>
        </div>
    </div>
    </>
}

export default ProductList