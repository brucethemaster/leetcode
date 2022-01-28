/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let arrString2 = t.split('');
  const arrString2Map = arrString2.reduce((ac, e) => ac.set(e, (ac.get(e) || 0) + 1), new Map());
  let i = 0;
  let j = 0;
  let count = arrString2Map.size;

  let left = 0;
  let right = s.length - 1;
  let min = s.length;

  let found = false;

  while (j < s.length) {
    let endChar = s[j++];

    if (arrString2Map.has(endChar) === true) {
      arrString2Map.set(endChar, arrString2Map.get(endChar) - 1);

      if (arrString2Map.get(endChar) === 0) {
        count = count - 1;
      }
    }

    if (count > 0) {
      continue;
    }

    while (count === 0) {
      let startChar = s[i++];

      if (arrString2Map.has(startChar) === true) {
        arrString2Map.set(startChar, arrString2Map.get(startChar) + 1);
        if (arrString2Map.get(startChar) > 0) {
          count = count + 1;
        }
      }
    }
    if (j - i < min) {
      left = i;
      right = j;
      min = j - i;
      found = true;
    }
  }
  return !found ? '' : s.substring(left - 1, right);
};
