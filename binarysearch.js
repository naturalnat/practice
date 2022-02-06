//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.

//the goal is to cut the search time in half.

var search = function(nums, target) {
    //step 1. create 2 pointers, left and right to point to first and last elements. 
    let left = 0; 
    let right = nums.length - 1 
    //step 2. create while loop, set left = right because they will eventually meet. 
    //we also want to find a middle element. 
    while (left <= right){
        let middle = left + Math.floor(right - left / 2)
    }
};

