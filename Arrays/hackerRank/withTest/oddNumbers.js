function oddNumbers(l, r) {
    let newArr= [];
    for(let i=l; i<=r; i++){
        if(i%2===1){
            newArr.push(i)
        }
    }
    console.log(newArr)
    return newArr;
}
oddNumbers(2,15);
module.exports=oddNumbers;