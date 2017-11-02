function bubbleSort(array) {
  var swapCount = 0;
  var passCount = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - passCount; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(j, j + 1, array);
      }
    }
    passCount++;
  }
  return array;
}

function swap(current, next, array) {
    var temp = array[next];
    array[next] = array[current];
    array[current] = temp;
    return array;
}
