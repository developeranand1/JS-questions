import api from './apiService';
const productsURL=api+'/product'

export const fetchAllProducts = async ({ brandName }) => {
    const url = "https://f2df.in/product/getProductsByFilter";
    console.log("📡 Sending request to:", url);
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brandName: brandName ? [brandName] : [],
        }),
      });
  
      const text = await response.text();
  
      try {
        const data = JSON.parse(text);
        console.log("✅ API JSON Response:", data);
        return data;
      } catch (e) {
        console.error("❌ Not valid JSON. Raw response:", text);
        return { news: [] };
      }
  
    } catch (err) {
      console.error("❌ Fetch error:", err);
      return { news: [] };
    }
  };
  
