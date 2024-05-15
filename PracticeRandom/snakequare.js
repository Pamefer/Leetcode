const snake = (limit) => {
    const matrix = [];
    let counter = 1;

    for (let i = 0; i < limit; i++) {
        matrix.push(Array.from({ length: limit }, () => 0))

    }
    let rowStart = 0;
    let rowEnd = limit - 1;
    let columnStart = 0;
    let columnEnd = limit - 1;
    console.log(matrix)
    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        for (let i = columnStart; i <= columnEnd; i++) {
            matrix[rowStart][i] = counter++;
        }
        rowStart++;
        console.log("---row", matrix)

        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][columnEnd] = counter++;
        }
        columnEnd--;
        console.log("---col", matrix)

        for (let i = columnEnd; i >= columnStart; i--) {
            matrix[rowEnd][i] = counter++;
        }
        rowEnd--;
        console.log("---row bot", matrix)

        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][columnStart] = counter++;
        }
        columnStart++;
        console.log("---row bot", matrix)

    }
    console.log(matrix)

}
console.log(snake(5))