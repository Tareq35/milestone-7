function sum(a, b, c) {
    console.log(arguments);
    const result = a + b + c;
    return result;
}
// sum= (a,b,c)=> {
    
//     const result = a+b+c;
//     return result;
// }
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);