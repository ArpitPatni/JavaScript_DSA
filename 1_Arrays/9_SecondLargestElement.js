/*
 Second Largest Element in an Array 
 */

 //Brute Force Approach
 function secondLargest(arr){
    const uniqueArr=[...new Set(arr)]; //O(n)
    uniqueArr.sort((a,b)=>b-a); //O(nlogn)
    if(uniqueArr.length<2){
        return "Second largest element not present";
    }else{
        return uniqueArr[1];
    }
 }
//  console.log(secondLargest([1,2,3,4,5,6,7,8,10,10])) //9
//  Timecomplexity: O(nlogn) 


 //Optimized Approach

 function secondLargestOptmimized(arr){
    let largest=arr[0];
    let secondLargest=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
 }

 console.log(secondLargestOptmimized([10,10,9])) //9




