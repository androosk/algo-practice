const smallest_subarray_sum = function (s: number, arr: number[]) {
  let windowStart = 0;
  let currentWindowLength = 0;
  let currentSum = 0;
  let smallestWindowLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];

    if (currentSum >= s) {
      while (currentSum >= s) {
        currentWindowLength = windowEnd - windowStart + 1;
        if (currentWindowLength <= smallestWindowLength) {
          smallestWindowLength = currentWindowLength;
        }
        currentSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  }

  if (smallestWindowLength !== Infinity) {
    return smallestWindowLength;
  } else return 0;
};

smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]); // should return 2
smallest_subarray_sum(7, [2, 1, 5, 2, 8]); // should return 1
smallest_subarray_sum(8, [3, 4, 1, 1, 6]); // should return 3
