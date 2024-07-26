function reverseString(str) {
    // type your code here
    let reverseStr = "" //Initialize an empty string reversedString.
  
    for (let i = str.length - 1; i >= 0; i--) { // Iterate over the input string from the last character to the first.
      reverseStr += str[i];// Append each character to reversedString.
  
    }
    return reverseStr  // Return reversedString.
  }
  
  if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 'ih'");
    console.log("=>", reverseString("hi"));
  
    console.log("");
  
    console.log("Expecting: 'ybabtac'");
    console.log("=>", reverseString("catbaby"));
  
    console.log("");
  
    console.log("Expecting: ''");
    console.log("=>", reverseString(""));
  
    console.log("");
  
    console.log("Expecting: 'racecar'");
    console.log("=>", reverseString("racecar"));
  }
  
  module.exports = reverseString;
  
  // Please add your pseudocode to this file:
  
  
  
  // And a written explanation of your solution:
  
  // Initialization: We create an empty string reversedString where the reversed version will be built.
  // Iteration: We use a for loop starting from the last index (s.length - 1) to the first index (0), decrementing the index each time (i--).
  // This loop accesses each character from the end of the string to the beginning.
  // Building the Reversed String: For each iteration, the character at index i (s[i]) is appended to reversedString.
  // Return the Result: Once the loop completes, reversedString contains the reversed string, which is then returned.