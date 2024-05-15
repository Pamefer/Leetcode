const groupAnagram=(anagrams)=>{
    const allSize=anagrams.length;
    let newArr={};
    for(let i=0; i<allSize;i++){
        let a= anagrams[i].split("").sort().join("");
        if(!newArr[a]){
            newArr[a]=[];
        }

        newArr[a].push(anagrams[i])
    }
  return Object.values(newArr)
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))