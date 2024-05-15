// Design an algorithm to encode a list of strings to a string.
//  The encoded string is then sent over the network and is decoded 
//  back to the original list of strings.
const encode=(arr)=>{
    if(!arr) return null;
    let encoded="";
    for(let i=0;i<arr.length;i++){
        encoded+= i===arr.length-1? arr[i]: arr[i]+"encoded";
    }
    console.log(encoded)
    return encoded;
}

const decode=(string)=>{
    const encodeWord="encoded";
    return string.split(encodeWord);
}
console.log(decode(encode(["lint","code","love","you"])));