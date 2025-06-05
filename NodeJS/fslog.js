const fs =require('fs/promises');

async function readData(){
    try{
        const data=await fs.readFile('./data.json','utf-8')
    console.log(data);
    }catch(error){
        console.log(error);
        
    }
}