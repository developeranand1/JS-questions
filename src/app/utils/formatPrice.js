export const  formatPriceINR=(amount)=>{
    return new Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
    }).format(amount)
}