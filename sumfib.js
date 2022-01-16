//given a positive integer, return sum of all odd Fibonacci numbers that are less or equal to the integer 

function fibsum(num){
    let sum = 0; 
    //need to calculate which number to add from
    //keep track of fibonacci sequence 
    let a =1; 
    let b = 1; 
    
    while (b <= num){
        if (b % 2 != 0) {
            sum += b;
        }
    }
    return sum; 
}

fibsum(4); 