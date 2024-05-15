const findMedian=(arr)=>{
    const newArr=arr.sort((a,b)=>a-b);
    const isUnique= arr.length%2;
    if(isUnique===1){
        let div=Math.floor(newArr.length/2);
        return newArr[div];
    }
}
console.log(findMedian([2,41,4,5,6]));