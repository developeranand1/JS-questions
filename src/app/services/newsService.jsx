import api from './apiService';

export const fetchAllNews = async ({ page, size, searchKeyword }) => {
  const response = await api.post('/news/getAllNews', {
    pc_id: 0,
    pageNo: page-1,
    size,
    searchKeyword,
  });

  return response.data;
};


export const getNewsById=async(id)=>{
    try{
        const response=await api.post("/news/getNews",{id});
        return response.data?.data;
    }
    catch(error){
        console.error("Error fetching news",error);
        throw error
    }
}
