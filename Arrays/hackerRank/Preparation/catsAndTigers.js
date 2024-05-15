/*
You're given strings tigers and cats representing the types of animals that are cats. 
Each character in tigers is a type of cat you have. 

Goal: You want to know how many of the cats you have are also tigers.

Constraints:
* tigers and cats consist of only English letters.
* All the characters of tigers are unique
* Case sensitive: "a" is considered a different type of cat from "A".
 
Example 1:
Input: tigers = "z", cats = "ZZ"
Output: 0

Example 2:
Input: tigers = "Aa", cats = "aAAbcef"
Output: 3

tigers:"bcd" cats="cbd"


*/

const getCats=()=>{
  let cats="aAAbcef";
  let tigers="aA";
  
  let catsArray=cats.split("");
  let tigersArray=tigers.split("");
  let count=0;
  
  
  for(let i=0; i < catsArray.length ; i++ ){
    for(let j=0; j<tigersArray.length; j++){
      if(catsArray[i]===tigersArray[j]){
        console.log("yes")
        count++;
      }
    }
  }
  console.log(count)
  return(count);
}
const catsAndTigers=()=>{
  let cats="aAAbcef";
  let tigers="aA";
  let count=0;
  for(let i=0;i<cats.length;i++){
    if(tigers.split('').includes(cats[i])){
      count++;
    }
  }
  return count;
}
console.log(catsAndTigers());
