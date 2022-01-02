//return longest word as string 
//if more than one, return array 


function longestWord(sentence) {
    //remove punctuation 
    //use match because it will return filtered array
    const words = sentence.match(/[a-z0-9]+/g) //global so it doesn't stop at first 
 
    //step 2 - sort by length 
    const sorted = words.sort((one, two) => two.length - one.length)
    //step 3 - address mulitple words by putting into array 
    const longestArray = sorted.filter((word) => word.length === sorted[0].length);
    //step 4 - check array length 
    if(longestArray.length === 1){
        return longestArray[0]
    } else {
        return longestArray
    }

}