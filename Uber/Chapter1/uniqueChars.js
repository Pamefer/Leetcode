const uniqueChars=(word)=>{
    let newArr={};
    let newWord=word.split("");
    console.log(newWord)
    for(let i=0;i<newWord.length;i++){
        if(!newArr[newWord[i]]){
            newArr[newWord[i]]=1;
        }else{
            return false
        }
    }
    return true;
}
console.log(uniqueChars("abcdefg")) ;