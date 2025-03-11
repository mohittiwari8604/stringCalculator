function calculate(str){
    if(str==="") return 0;
    if(str.length===1 && !!isNaN(str) ) return Number(str)

    const arr= str.split(/[^0-9-]+/g).map(n=>Number(n)).filter(n=>!isNaN(n));

    const negative = arr.filter(n=>n<0);
    if(negative.length>0){
        throw new Error(`Found negative numbers:- ${negative.join(", ")}`)
    }
   const sum = arr.reduce((acc,curr)=>acc+(curr>1000?0:curr),0)
   return sum;
}

module.exports =calculate;