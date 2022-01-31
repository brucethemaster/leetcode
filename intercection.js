function findIntersection(strArr) {
  // add implemelentation

  let strArr1 = strArr[0].split(/, /);
  let strArr2 = strArr[1].split(/, /);

  console.log(strArr1);
  console.log(strArr2);

  let result = [];

  strArr1.forEach(element => {
    if (strArr2.includes(element) !== false) result.push(element);
  });
  return result;
}

console.log(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));
