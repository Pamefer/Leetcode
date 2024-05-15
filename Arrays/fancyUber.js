const fancyRide=(lengthMiles, fares)=>{
    const credit =20;
    const uberTypes=["UberX","UberXL","UberPlus","UberBlack","UberSUV"];
    const indexSuccess=fares.findIndex(fare=>{
        console.log({lengthMiles, fare, result:fare*lengthMiles})
        return lengthMiles*fare>20;
    })
console.log("==indexSuccess",indexSuccess)
    return indexSuccess<0? uberTypes.at(-1):uberTypes[indexSuccess-1];
}

console.log(fancyRide(30, [0.5,0.5,0.5,0.5,0.5]));