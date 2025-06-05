const o={
    a:"some thing",
    b:42
}

for(const [key, val] of Object.entries(o)){
    console.log(`${key} of ${val}`);
}