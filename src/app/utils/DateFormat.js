export const DateFormat=(isoDate)=>{
    if(!isoDate){
        return ''
    }

    const date =new Date(isoDate)
    const options={
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    return date.toLocaleDateString('en-US',options);
}