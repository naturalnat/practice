class Sums{ 
    constructor(){}

    twoSum = (array, sum) => {
        const past = [];
        let count = 0;
    
        for (let i = 0; i < array.length; i++) {
            let curr = array[i]
            let needed = sum - array[i]
            if (!past.includes(needed)) {
                past.push(curr)
            } else {
                return [needed, curr];
            }
        count++; 
        }
        console.log(count)
        return "Not found!";
    };
    
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = 20;


console.log(twoSum(array, sum));