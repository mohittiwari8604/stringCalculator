function calculate(str){
    if(str===""){
        return 0;
    }
    const arr=str.split(",")
    let sum =0 
    arr.forEach(element => {
        if(typeof Number(element) === "number"){
            sum +=Number(element)
        }
      
    });
    return sum;
}

module.exports =calculate;