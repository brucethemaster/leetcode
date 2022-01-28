
class Solution
{
public:
  int maxSubArray(vector<int> &nums)
  {
    int largestSumSoFar;
    int endingLargeSum;

    if (nums.size() == 0)
    {

      return 0;
    }
    if (nums.size() == 1)
    {

      return nums.at(0);
    }

    endingLargeSum = nums[0];
    largestSumSoFar = nums[0];

    for (int i = 1; i < nums.size(); i++)
    {

      endingLargeSum = std::max(endingLargeSum + nums[i], nums[i]);

      largestSumSoFar = std::max(endingLargeSum, largestSumSoFar);
    }

    return largestSumSoFar;
  }
};