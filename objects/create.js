const person={
    isHuman:false,
    printIntroduction:function(){
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        
    }
}


// const me=Object.create(person);
// me.name="Anand";
// me.isHuman=true

// me.printIntroduction()


// Object.create(proto);
// Object.create(proto, propertiesObj)


function Shape(){
    this.x=0;
    this.y=0;
}

