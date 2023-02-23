function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Halim Mama';
// const numbers = [45, 54, 78];
// greeting(numbers)
function greetingHandler(name){
    console.log('Good Morning', name); 
}
greeting(greetingHandler, 'Tom Hanks')