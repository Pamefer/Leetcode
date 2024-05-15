const twoSum = (nums, target)=>{
    let newArr=new Map();
    for(let i=0; i<nums.length; i++) {
        let resta= target - nums[i];
        if(newArr.has(resta)){
            console.log("====",newArr[resta])
            return [i, newArr.get(resta)]
        }
        newArr.set(nums[i],i);
        console.log(newArr)

    }
};
console.log(twoSum([4,3,1,2],6))