/*
Write a function that take array and a chunk size as an input 
The function should return a new array where the original array
is split into chunks of the specified size

chunk([1,2,3,4,5,6,7,8],3) Output- [[1,2,3],[4,5,6],[7,8]]
chunk([1,2,3,4,5],2) Output- [[1,2],[3,4]]
*/

const chunkedArray=(arr,chunkSize)=>{
    const chunked=[];
    let index=0;
    while(index<arr.length){
        const chunk=arr.slice(index,index+chunkSize);
        chunked.push(chunk);
        index+=chunkSize;
    }
    return chunked;
}

console.log(chunkedArray([1,2,3,4,5,6,7,8],3))
console.log(chunkedArray([1,2,3,4,5],2))