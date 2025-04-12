"use client";

import { DropMessage } from "./DropMessage";
import { TagName } from "./TagName";
import styles from '../styles/News.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { DateFormat } from "../utils/DateFormat";
import { TopNewsPost } from "./news/TopNewsPost";
import Image from "next/image";




const NewsDetail = ({ newsData }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="card">
            {newsData?.images?.length > 0 && newsData.images[0]?.filePath && (
          
                <Image
                height={300}
                width={300}
                style={{ height: '300px' }}
                  src={`https://f2df.in/${newsData.images[0].filePath}`}
                  className="card-img-top"
                  alt={newsData.images[0]?.originalFileName || "News Image"}
                />
              )}
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <span className="badge bg-success">{newsData?.cat_ids} </span>
                  </div>
                  <div>
                   <a href=""> <FaFacebookSquare className="mx-2"/></a>
                    <a href=""><FaWhatsappSquare/></a>
                  </div>
                </div>
               
                <h5 className={`${styles.newsTitle}`}>{newsData?.heading}</h5>
                <p className={`${styles.newsEnglishTitle}`}>
                 {newsData?.title}
                </p>
                <div className={`my-3 ${styles.dateSize}`}>
               <span> By: F2DF</span> <span className="mx-2"> {  DateFormat(newsData?.createDate )}</span>
                </div>
                <p className={`${styles.newsDescription}`} dangerouslySetInnerHTML={{ __html: newsData?.details }}></p>
              </div>
            </div>
           

            {/* {newsData ? (
              <pre>{JSON.stringify(newsData, null, 2)}</pre>
            ) : (
              <p>Loading...</p>
            )} */}
          </div>
          <div className="col-md-4">
          <TagName/>
          <DropMessage/>
          <TopNewsPost/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
