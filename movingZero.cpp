using namespace std;

class Solution
{
public:
  void moveZeroes(vector<int> &nums)
  {

    int myCount = count(nums.begin(), nums.end(), 0);
    nums.erase(remove(nums.begin(), nums.end(), 0), nums.end());
    for (int i = 0; i < myCount; i++)
    {
      nums.push_back(0);
    }
    for (auto i : nums)
      std::cout << i << ' ';
  }
};