// Find the maximum value of the subarrays size of k
const max_sub_array_of_size_k = (k: number, arr: number[]): number => {
  let currentSum = 0;
  let windowStart = 0;
  let allSums: number[] = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      allSums.push(currentSum);
      currentSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  console.log(Math.max(...allSums));
  return Math.max(...allSums);
};

max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]); // should return 9
max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]); // shoud return 7
