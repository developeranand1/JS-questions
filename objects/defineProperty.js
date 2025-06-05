// const o={}
// Object.defineProperty(o, "property1",{
//     value:24,
//     writable:false
// });

// o.property1=77;

// console.log(o.property1);


const obj={}

const descriptor=Object.create(null);
descriptor.value="static";


Object.defineProperty(obj,"key",descriptor);

Object.defineProperty(obj,"key2",{
    enumerable:false,
    configurable:false,
    writable:false,
    value:"static"
});


function withValue(value){
    const d=withValue.d || (withValue.d={
        enumerable:false,
        writable:false,
        configurable:false,
        value,
    });

    if(d.value !== value) d.value=value;

    return d;
}


Object.defineProperty(obj,"key",withValue("static"));




