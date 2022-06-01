const testArr = [15, 10, 33, 2, 4, 80, 24];

const qSort = (arr) => {
  // base case
  if (arr.length < 2) return arr;

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]];
    } else {
      return [arr[0], arr[1]];
    }
  }

  // partitioning
  if (arr.length > 2) {
    const pivot = arr[0];

    let smallerGroup = [];
    let biggerGroup = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        smallerGroup.push(arr[i]);
      }
      if (arr[i] > pivot) {
        biggerGroup.push(arr[i]);
      }
    }

    const sortedSmallGroup = qSort(smallerGroup);
    const sortedBigGroup = qSort(biggerGroup);

    return [...sortedSmallGroup, pivot, ...sortedBigGroup];
  }
};

qSort(testArr);
