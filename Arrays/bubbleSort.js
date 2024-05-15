const bubbleSort=(nums)=>{
    for(let i=0; i<nums.length -1; i++){
        for(let j=0; j<nums.length -1;j++){
            if(nums[j]>nums[j+1]){
                let temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
            console.log("==========",nums)
        }
        console.log("=External=",nums)
    }
    return nums;
}
bubbleSort([2,1,15,6,5]);