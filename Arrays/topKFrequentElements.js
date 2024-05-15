const topK=(nums, k)=>{
    let newNums={};
    let finalNumbers=[];
    for(let i=0;i<nums.length;i++){
        if(!newNums[nums[i]]){
            newNums[nums[i]]=1;
        }else{
            newNums[nums[i]]++;
        }
    }
    const sortedNums=Object.entries(newNums).sort((a,b)=> a[1]-b[1]);
   
    while(k<=sortedNums.length){
        let deletedItem =sortedNums.pop()
        finalNumbers.push(deletedItem[0])
    }

    return finalNumbers;
}
const result=topK([1,1,1,2,2,3], 2);
console.log(result)