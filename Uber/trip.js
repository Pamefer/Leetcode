const getTrip=(tickets)=>{
    let result=[];
    let departure=[];
    let arrival=[];
    for(let i=0; i<tickets.length;i++){
        departure.push(tickets[i][0]);
        arrival.push(tickets[i][1]);
        // if(map[departure]) {
        //     map[departure].push(arrival);
        // } else {
        //     map[departure] = [arrival];
        // }
    }
    for(let i=0; i<departure.length;i++){
        console.log("======aqui",departure[i])

        if(!arrival.includes(departure[i])){
            result.push([departure[i], arrival[i]])
            console.log("======aquiiiii",departure[i])
            
        }

    }
console.log("====departure", departure)
console.log("====arrival", arrival)
console.log("====result", result)
    return[];
}

getTrip([["c","d"],["b","c"],["a","b"],["d","e"]]);
