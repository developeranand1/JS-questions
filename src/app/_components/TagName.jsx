import Link from 'next/link'
import styles from '../styles/TagsName.module.css'
import { tagNames } from '../constants/tagNames';
export const TagName =({onTagClick})=>{
   
    return <>

    <div className="card">
        <div className="card-body">
            <div className="border-start border-3 border-success ps-2">Popular Categories</div>
           
           <ul className='list-unstyled mt-2'>
            {
                tagNames && tagNames.map((tags,index)=>(
                    
                      <li className={`${styles.tagsList}`}  key={index}>  <span onClick={()=>{onTagClick(tags.name)}} className={`${styles.tagsName}`} >{tags.name} </span> </li>
                    
                ))
                    
                
            }
            </ul>
        </div>
    </div>
    </>
}