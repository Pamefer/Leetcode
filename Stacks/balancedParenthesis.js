function isBalanced(input) {
  //input ([]())
  //https://codesandbox.io/s/stoic-kalam-7fdh7l?file=/src/index.mjs:24-1194
  // LIFO
  let startChar = ['(', '[', '{'];
  let savedChars = [];// 
  if (input.length === 1) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    console.log(i, "---")
    if (startChar.includes(input[i])) {
      console.log("----incluye")
      savedChars.push(input[i]);
      continue;
    }
    else {
      console.log("---sigueee")

      let last = savedChars[savedChars.length - 1];
      if (input[i] === ')' && last === '(') {
        savedChars.pop()
        continue;
      }
      if (input[i] === '}' && last === '{') {
        savedChars.pop()
        continue;
      }
      if (input[i] === ']' && last === '[') {
        savedChars.pop()
        continue;
      }

    }
    console.log("----sigue2")

  }
  return savedChars.length === 0;
}



function runTests() {
  const runTest = (input, expected) => {
    const passed = isBalanced(input) === expected ? 'Passed' : 'Failed';
    console.log(passed + '(expected ' + expected + '): ' + input);
  }
  runTest('([', false);
  runTest(')', false);
  runTest('a(b[c)d]', false);
  runTest('((a))(b)[c{d}e]', true);
  runTest('(a)(b)[c{de]', false);
  runTest('(((]}(', false);
}

runTests();


