function calculate(str){
    if(str==="") return 0;
    // console.log(str.length===1 && typeof Number(str[0])==="number" ,str[0])
    if(str.length===1 && typeof Number(str[0])==="number" ) return Number(str[0])

    let delimiter = /,|\n/;

    const customDelimiterMatch = str.match(/^\/\/(\[.*?\]|.)\n/);
    if (customDelimiterMatch) {
        const delimiterSection = customDelimiterMatch[1];
        str = str.slice(customDelimiterMatch[0].length); 

        
        const multipleDelimiters = delimiterSection.match(/\[([^\[\]]+)\]/g);
        if (multipleDelimiters) {
            delimiter = new RegExp(multipleDelimiters.map(d => d.slice(1, -1)).join("|"), "g");
        } else {
            delimiter = new RegExp(delimiterSection, "g");
        }
    }

    const arr=str.split(delimiter).map(n=>Number(n));
   const sum = arr.reduce((acc,curr)=>acc+curr,0)
   return sum;
}
calculate("4")
module.exports =calculate;