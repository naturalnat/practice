//challenge 1: reverse string 
//create function that reverses string 

//sol 1
function reverse(string){
  return string
  .split('')
  .reverse()
  .join('');
}

//sol 2 
function reverse(string){
    let revString = '';
     
    for (let i = string.length - 1; i >= 0; i--){
        revString = revString + string[i];
    }
    return revString
  }

//sol 3 
function reverse(string){
    let revString = '';
     
    for (let i = 0; i <= string.length -1; i++){
        revString = string[i] + revString; 
    }
    return revString
  }