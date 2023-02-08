
let arr = [12, "ayan", 12.2, true]
console.log(arr[2]);

for( key in arr)
console.log(key);

let a = {
    fname: "ayan",
    lname: "husain",
    age: 20,
    movie:[
        "pathan", "devdas", "tere naam",
    ],
    coffee: () =>{
        return "aaj mai " + a.fname + " k sath ";
    },
    chai: () =>{
        return a.movie[0] + " dekhne jaunga";
    },
}

console.log(a.coffee() + "" + a.chai());