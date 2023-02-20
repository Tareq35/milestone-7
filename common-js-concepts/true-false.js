/* 
Truthy: 
1. true
2. any number (+ve, -ve)will be truthy other than zero(0)
3. any string other than empty string
4. '0' , 'false'
5. {}
6. []
7. 

Falsy: 
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
6. 
*/

// check falsy
const y= null;
if(!y){
    console.log('value is truthy');
}
// check truthy
if(!!x){
    console.log('value is truthy');;
}



const x = false;
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}