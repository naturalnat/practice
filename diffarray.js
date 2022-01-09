//compare two arays and return a new array with the difference of two arrays 

function difArray(array1, array2) {
    //start with empty array 
    const union = []

    for (let i = 0; i < array1.length; i++) {
        if (!union.includes(array1[i])) {
            union.push(array1[i])
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (!union.includes(array2[i])) {
            union.push(array2[i]);
        }
    }
}

difArray([1, 2, 3, 5], [1, 2, 3, 4, 5])