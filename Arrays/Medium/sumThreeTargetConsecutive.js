// Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

const sumThreeTargetConsecutiva=(num)=>{
    console.log(num%3)
    if(num%3!=0){
        return [];
    }
let division=num/3-1;
return [division, division+1, division+2]
}

sumThreeTargetConsecutiva(4);

