const mergeSortAlg=(nums)=>{
    if (nums.length <= 1) return nums;
    console.log("===",nums)

    let div=nums.length/2;
    let rightArr=nums.slice(0, div);
    let leftArr=nums.slice(div, nums.length);

    let sortedLeftArr=mergeSortAlg(leftArr);
    console.log("-ants-",sortedLeftArr)
    let sortedRightArr=mergeSortAlg(rightArr);
    console.log("-desp-",sortedRightArr)

    const result=merge(sortedLeftArr,sortedRightArr);
    return result;
}

const merge=(sortedLeftArr,sortedRightArr)=>{
    console.log("=====MERGE INIT========entro",sortedLeftArr)
    console.log("=============entro",sortedRightArr)
    let newArr=[];

    while(sortedLeftArr.length>0 && sortedRightArr.length>0){
        if(sortedLeftArr[0]>sortedRightArr[0]){
            newArr.push(sortedRightArr[0])
            sortedRightArr.shift()
        }else{
            newArr.push(sortedLeftArr[0])
            sortedLeftArr.shift()
        }
        console.log("=======MERGE CASI===",sortedLeftArr, sortedRightArr)

    }
    console.log("=======MERGE END===",newArr, sortedLeftArr, sortedRightArr)

    return [...newArr, ...sortedLeftArr, ...sortedRightArr];
}

console.log(mergeSortAlg([ 1, 2, 15, 6, 5])) ;