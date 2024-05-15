function isBalanced(input) {
  //input ([]())
  //https://codesandbox.io/s/stoic-kalam-7fdh7l?file=/src/index.mjs:24-1194
  // LIFO
  let signsWord = input.split("");
  const signs = ["(", "[", "{"];
  let newSigns = [];
  for (let i = 0; i < signsWord.length; i++) {
    if (signs.includes(signsWord[i])) {
      newSigns.push(signsWord[i])
    } else {
      if (newSigns[newSigns.length - 1] === "(" && signsWord[i] === ")") {
        newSigns.pop()
      }
      if (newSigns[newSigns.length - 1] === "[" && signsWord[i] === "]") {
        newSigns.pop()
      }
      if (newSigns[newSigns.length - 1] === "{" && signsWord[i] === "}") {
        newSigns.pop()
      }
    }
  }
  console.log(newSigns)

  return newSigns.length === 0;
}



function runTests() {
  const runTest = (input, expected) => {
    const passed = isBalanced(input) === expected ? 'Passed' : 'Failed';
    console.log(passed + '(expected ' + expected + '): ' + input);
  }
  runTest('([', false);
  // runTest(')', false);
  // runTest('a(b[c)d]', false);
  // runTest('((a))(b)[c{d}e]', true);
  // runTest('(a)(b)[c{de]', false);
  // runTest('(((]}(', false);
}

runTests();


