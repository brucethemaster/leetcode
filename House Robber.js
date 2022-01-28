/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array.apply(null, Array(nums.length)).map(function () {});
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], dp[0]);

  for (i = 2; i < dp.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
