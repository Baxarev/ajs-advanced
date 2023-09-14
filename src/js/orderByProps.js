export function orderByProps(obj, fistElements) {
  const fistElementsArr = [];
  const lastElementsArr = [];

  for (let elment in obj) {
    if (fistElements.includes(elment)) {
      fistElementsArr.push({
        key: elment,
        value: obj[elment],
      })
    } else {
      lastElementsArr.push({
        key: elment,
        value: obj[elment],
      })
    }
  }

  lastElementsArr.sort((a,b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });

  return [...fistElementsArr, ...lastElementsArr];
}