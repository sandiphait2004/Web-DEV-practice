let x={
    name: "sandip",
    age: 20,
    percentage: 92.5,
    'is married': false
};

for(const key in x){
    if(Object.hasOwnProperty.call(x,key)){
        console.log(x[key]); //x[key] to determine the value
    }
}

for(const key in x){
    
        console.log(key,x[key]); //x[key] to determine the value
    }
