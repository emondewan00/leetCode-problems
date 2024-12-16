// 303. Range Sum Query - Immutable

// in this problem also we can use another approach to ignore 0 index checking . The approach is fill first index with 0 and store our calculated value from 1 index and always increase right by 1 and then minus from the left .

class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.prefix = [nums[0]];

    for (let i = 1; i < this.nums.length; i++) {
      const element = this.nums[i];
      this.prefix[i] = this.prefix[i - 1] + element;
    }
  }
  sumRange(left, right) {
    if (left === 0) {
      return this.prefix[right];
    }
    const ans = this.prefix[right] - this.prefix[left - 1];
    return ans;
  }
}

const numsArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numsArray.sumRange(0, 2));
