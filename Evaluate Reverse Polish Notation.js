/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const exp = ['*', '/', '-', '+'];

  let result = 0,
    x,
    y,
    operator,
    index;
  while (tokens.length > 0) {
    if (tokens.length === 1) {
      break;
    }
    index = tokens.findIndex(item => exp.includes(item));

    x = tokens[index - 2];
    y = tokens[index - 1];
    operator = tokens[index];
    result = Math.trunc(eval(x + ' ' + operator + ' ' + y));

    tokens.splice(index - 2, 3, result);
  }

  return tokens;
};
