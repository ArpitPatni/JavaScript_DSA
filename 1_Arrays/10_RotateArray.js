/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // To handle cases where k > n
    const rotatedArray = nums.splice(n-k,n);  //O(n)
    nums.unshift(...rotatedArray); //O(n)
    return nums;
}

//Time comeplcity: O(n) 




/*
 Optimised Approach
 */

 function reverse(nums,left,right){
        while(left<right){
            [nums[left],nums[right]]=[nums[right],nums[left]];
            left++;
            right--;
        }
 }
 function OptimisedRotateArray(nums,k){
     const n=nums.length;
     k%=n;
     reverse(nums,0,n-1);
     reverse(nums,0,k-1);
     reverse(nums,k,n-1);
     return nums;
 }

 console.log(OptimisedRotateArray([1,2,3,4,5,6,7],3)); // [5,6,7,1,2,3,4]