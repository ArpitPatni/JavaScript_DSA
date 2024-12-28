

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

//Brure Force Approach
// Time complexity: O(n*log(n))+O(n)
var removeDuplicates = function(nums) {
    let set = new Set(nums);
   let uniqueArr = Array.from(set);
   for (let i = 0; i < uniqueArr.length; i++) {
     nums[i] = uniqueArr[i];
   }
   return uniqueArr.length
 };

 //Optimized Approach

 var removeDuplicates = function(nums) {
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            nums[i+1]=nums[j];
            i++;
        }
    }
    return i+1;
};