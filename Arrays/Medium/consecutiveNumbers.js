const consecutiveNumbers=(nums)=>{
    if(!nums.length) return 0;
    if(nums.length===1) return 1;
    nums.sort((a,b)=>a-b);
    let count=0;
    let temp=1;
    for(let i=0; i<nums.length;i++){
        if(nums[i+1]-1 ===nums[i]){
            temp++;
            count=Math.max(temp, count)
        }else if(nums[i+1] ===nums[i]){
            count=Math.max(temp, count)
        }else{
            temp=1;
            count=Math.max(temp, count)
        }
    }
    return count;
}
console.log(consecutiveNumbers([100,4,200,1,3,2])); 
console.log(consecutiveNumbers([0])); 