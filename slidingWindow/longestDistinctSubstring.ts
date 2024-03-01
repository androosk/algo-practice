const longest_substring_with_k_distinct = function (str: string, k: number) {
  let windowStart: number = 0;
  let longestWindow: number = 0;
  let charMap: Record<string, number> = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const currentLetter: string = str[windowEnd];

    if (!(currentLetter in charMap)) {
      charMap[currentLetter] = 0;
    }

    charMap[currentLetter] += 1;

    while (Object.keys(charMap).length > k) {
      const leftLetter: string = str[windowStart];
      charMap[leftLetter] -= 1;
      if (charMap[leftLetter] === 0) {
        delete charMap[leftLetter];
      }
      windowStart += 1;
    }

    longestWindow = Math.max(longestWindow, windowEnd - windowStart + 1);
  }
  console.log(longestWindow);
  return longestWindow;
};

longest_substring_with_k_distinct("araaci", 2); // should return 4
longest_substring_with_k_distinct("araaci", 1); // should return 2
longest_substring_with_k_distinct("cbbebi", 3); // should return 5
