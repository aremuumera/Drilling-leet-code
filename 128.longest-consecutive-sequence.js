/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [100, 4, 200, 1, 3, 2];
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
// @lc code=end

console.log(longestConsecutive(nums));

// this gives an a time  complexity of O(n) because each number is processed at most twice (once in the outer loop and once in the inner while loop).

//  The space complexity is also O(n) due to the storage of numbers in the set.
