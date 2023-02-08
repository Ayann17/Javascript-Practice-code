function sum(value, ...argument){
        let total= 0;
        // console.log(` Hello ${value} total sum is:`)
        for (key in argument){
            total += argument[key]
        } 
        return total;
}

console.log(`Ayan the total is: ${sum("Number", 11, 22, 33,)}`)
// console.log(sum("Ayan", 11, 22, 33));