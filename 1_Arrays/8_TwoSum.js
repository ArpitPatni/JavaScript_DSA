const twoSum=(arr,target)=>{
    const ansArray=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                ansArray.push([arr[i],arr[j]]);
            }
        }
    }
    return ansArray;
}

const result=twoSum([2,7,11,15,8,1],9);
console.log(result)