var largestRectangleArea = function (heights) {
  let group = [];
  let chunk = [];
  heights.map(function (a) {
    if (a !== 0) {
      chunk.push(a);
    } else {
      group.push(maxAreaRectange(chunk));
      chunk = [];
    }
  });
  group.push(maxAreaRectange(chunk));

  return Math.max(...group);
};

var maxAreaRectange = function (heights) {
  if (heights.length === 0) return 0;
  if (heights.length === 1) return heights[0];

  let minNumber = Math.min(...heights);
  let maxAarea = minNumber * heights.length;

  let startIndex = heights.indexOf(minNumber);

  let subHeights1 = heights.splice(startIndex + 1, heights.length - 1);
  let subHeights2 = heights.splice(0, heights.length - 1);
  console.log(`subHeights ${subHeights1}`);
  console.log(`heights ${subHeights2}`);
  return Math.max(maxAarea, maxAreaRectange(subHeights1), maxAreaRectange(subHeights2));
};

console.log(largestRectangleArea([1, 1, 1, 1, 1, 100]));
