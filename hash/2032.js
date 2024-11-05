// 2032. Two Out of Three

function twoOutOfThree(nums1, nums2, nums3) {
  // Convert each array to a set to keep only unique elements
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);

  // Create a frequency map to count occurrences across sets
  const frequencyMap = new Map();

  // Helper function to update the frequency map
  function updateFrequency(set) {
    for (let num of set) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  }

  // Update frequency for each set
  updateFrequency(set1);
  updateFrequency(set2);
  updateFrequency(set3);

  // Collect elements that appear in at least two sets
  const result = [];
  for (let [num, count] of frequencyMap.entries()) {
    if (count >= 2) {
      result.push(num);
    }
  }

  return result;
}

// Example :

console.log(twoOutOfThree([1, 1, 2, 2, 3], [2, 3], [3, 3, 3, 4, 4, 4])); // Output: [3]
console.log(twoOutOfThree([1, 2, 2, 4, 4, 4], [1, 2, 3], [3, 4, 4])); // Output: [2, 4]
console.log(twoOutOfThree([1, 2, 3], [2, 3, 3, 4, 4, 4], [1, 2, 3, 4, 4, 4])); // Output: [1, 2, 3, 4]
