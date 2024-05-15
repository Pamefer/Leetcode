const productArray=(nums)=>{
    let product=1;
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        newArr[i]=product;
        product*=nums[i];

    }
    console.log("====",newArr)
    product=1;
    for(let i=nums.length-1;i>=0;i--){
      
        newArr[i]*=product;
        product*=nums[i];
    }
    return newArr;
 
}
console.log(productArray([1,2,3,4]))