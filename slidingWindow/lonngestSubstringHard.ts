const non_repeat_substring = function (str: string) {
  let charMap = {};
  let windowStart = 0;
  let longestString = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const currentLetter = str[windowEnd];
    if (!charMap[currentLetter]) {
      charMap[currentLetter] = 0;
    }
    charMap[currentLetter] += 1;

    while (charMap[currentLetter] > 1) {
      const firstChar = str[windowStart];
      charMap[firstChar] -= 1;
      if (charMap[firstChar] === 0) {
        delete charMap[firstChar];
      }
      windowStart += 1;
    }
    longestString = Math.max(longestString, windowEnd - windowStart + 1);
  }
  console.log(longestString);
  return longestString;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
); // expect 3
console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
); // expect 2
console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
); // expect 5
