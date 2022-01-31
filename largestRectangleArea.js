var largestRectangleArea = function (heights) {
  let stack = [];
  stack.push(-1);
  let length = heights.length;
  let maxArea = 0;
  for (let i = 0; i < length; i++) {
    while (stack[stack.length - 1] != -1 && heights[stack[stack.length - 1]] >= heights[i]) {
      let currentHeight = heights[stack.pop()];
      let currentWidth = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, currentHeight * currentWidth);
    }
    stack.push(i);
  }
  while (stack[stack.length - 1] != -1) {
    let currentHeight = heights[stack.pop()];
    let currentWidth = length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, currentHeight * currentWidth);
  }
  return maxArea;
};
