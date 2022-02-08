/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const i = nums1.length;
  const j = nums2.length;

  let odd, y;
  if ((j + i) % 2 == 0) {
    y = parseInt((i + j) / 2);
  } else {
    y = parseInt((i + j) / 2);
    odd = true;
  }

  let nums3 = [];

  while (nums3.length < parseInt((i + j) / 2) + 1) {
    let temp1, temp2;

    if (nums1.length > 0) {
      temp1 = nums1.shift();
    } else {
      temp1 = Number.MIN_SAFE_INTEGER;
    }

    if (nums2.length > 0) {
      temp2 = nums2.shift();
    } else {
      temp2 = Number.MIN_SAFE_INTEGER;
    }

    if (temp1 <= temp2 && temp1 !== Number.MIN_SAFE_INTEGER) {
      nums3.push(temp1);
      nums2.unshift(temp2);
      console.log('I am here 1');
    } else if (temp1 >= temp2 && temp2 !== Number.MIN_SAFE_INTEGER) {
      nums3.push(temp2);
      nums1.unshift(temp1);
      console.log('I am here 2');
    } else if (temp1 === Number.MIN_SAFE_INTEGER) {
      nums3.push(temp2);
    } else if (temp2 === Number.MIN_SAFE_INTEGER) {
      nums3.push(temp1);
    }
  }

  if (odd === true) {
    return nums3[parseInt((i + j) / 2)];
  } else {
    return (nums3[parseInt((i + j) / 2)] + nums3[parseInt((i + j) / 2) - 1]) / 2;
  }
};
