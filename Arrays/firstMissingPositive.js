const firstMissingPositive=(nums)=>{
    if(nums==null || nums.length==0) return 1;
    const n=nums.length;
    let containsOne=false;
    // paso 1
    for(let i=0; i<n;i++){
        if(nums[i]==1) containsOne=true;
        if(nums[i]<=0 || nums[i]>n ) nums[i]=1;
    }
    // if(containsOne==false) return 1;

    //paso 2
    for(let i=0; i<n;i++){
        const index=Math.abs(nums[i])-1
        if(nums[index]>0) {
            nums[index]=nums[index] * -1;
        }
    }
    //paso 3
    console.log(nums)
    for(let i=0; i<n;i++){
        if(nums[i]>0) return i+1; 
    }
    return n+1;
}
const result=firstMissingPositive([2,3,5,-13,6,-5,22]);
console.log(result)