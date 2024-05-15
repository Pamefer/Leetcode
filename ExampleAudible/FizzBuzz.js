const fizzBuzz=(n)=>{

    for(let i=1; i<=n; i++){
        if (i<=0) console.log("0");
        let multiple3 = i%3;
        let multiple5 = i%5;

        if (multiple3===0 && multiple5===0 ) console.log(i, "FizzBuzz");
        else if (multiple3===0) console.log(i, "Fizz") ;
        else if (multiple5===0) console.log(i, "Buzz") ;
        else console.log(i) ;
        // console.log(i)
    }
    
}
fizzBuzz(15);