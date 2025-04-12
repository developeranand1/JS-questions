import styles from '../../styles/modules/Product.module.css'
import { FaSearch } from "react-icons/fa";
export const SearchProduct=()=>{
    return <>
    <div className="card my-3">
        <div className="card-body">
        <div className="border-start border-3 border-success ps-2">Search Objects/Products</div>
        <div className="my-4">
        <input type="text"  className="form-control"/>
        <div className={`${styles.searchIcons}`}>
<FaSearch className={styles.search}/>
        </div>
        </div>
        </div>
    </div>
    </>
}