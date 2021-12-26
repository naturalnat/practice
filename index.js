//challenge 1: reverse string 
//create function that reverses string 

function reverse(string){
    const stringArray = string.split(''); //split string into array 
    stringArray.reverse();
    
    return stringArray.join('')
}