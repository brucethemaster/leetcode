/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stringS = [];

  let layer = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === '(' && layer === 0) {
      layer += 1;
    } else if (s[i] === ')' && layer === 1) {
      layer -= 1;
    } else if (s[i] === '(' && layer > 0) {
      stringS.push(s[i]);

      layer += 1;
    } else if (s[i] === ')' && layer > 1) {
      stringS.push(s[i]);

      layer -= 1;
    }
  }

  return stringS.toString().replace(/,/g, '');
};
