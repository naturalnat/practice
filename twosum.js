const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = 20;

const twoSum = (array, sum) => {
    const past = [];


    for (let i = 0; i < array.length; i++) {
        let curr = array[i]
        let needed = sum - array[i]
        if (!past.includes(needed)) {
            past.push(curr)
        } else {
            return [needed, curr];
        }
    
    }
    return "Not found!";
};

console.log(twoSum(array, sum));