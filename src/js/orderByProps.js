export function orderByProps(obj, firstElements) {
  const firstElementsArr = [];
  const lastElementsArr = [];

  // Перебор по firstElements для гарантированного порядка ключей
  for (let element of firstElements) {
    if (obj.hasOwnProperty(element)) {
      firstElementsArr.push({
        key: element,
        value: obj[element],
      });
    }
  }

  // Перебор по всем свойствам объекта
  for (let element in obj) {
    if (!firstElements.includes(element)) {
      lastElementsArr.push({
        key: element,
        value: obj[element],
      });
    }
  }

  lastElementsArr.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });

  return [...firstElementsArr, ...lastElementsArr];
}