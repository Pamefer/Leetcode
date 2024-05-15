const oddNumbers= require('./oddNumbers');

it("HappyPath",()=>{
    expect(oddNumbers(2,15)).toStrictEqual([ 3, 5, 7, 9, 11, 13,15 ]);
})