const reverseString=(word)=>{
    let newWord=[];
    for(let i=word.split("").length-1; i>=0;i--){
        newWord.push(word[i])
    }
    return newWord.join("");
}
console.log(reverseString("pamela"))