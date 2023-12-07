function nextPalindrome(num) {
  //your JS code here.
	if (isNaN(num) || num < 0) {
    return "Invalid input. Please enter a valid non-negative number.";
  }

  // Find the next palindrome number
  const result = findNextPalindrome(num);

  return result;
}
function findNextPalindrome(number) {
  // Increment the input number
  number++;

  // Keep checking for palindromes until one is found
  while (!isPalindrome(number.toString())) {
    number++;
  }

  return number;
}

// Helper function to check if a given string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input))
