//return string of longest word
//if more than one, put into array 


function longestWord(sentence) {
    //remove punctuation 
    //use match because it will return filtered array
    const words = sentence.match(/[a-z0-9]+/g) //global so it doesn't stop at first 
 
    //step 2 - sort by length 
    const sorted = words.sort(function(one, two){
        return two.length - one.length
        //compares based on length in each iteration 
        //returns sorted order 
    })
}