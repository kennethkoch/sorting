describe('Split Array function', function() {
  var evenArray = [1, 3, 3, 2];
  var oddArray = [7, 13, 21, 54, 12]
  var splitEven = [[1, 3], [3,2]]
  var splitOdd = [[7, 13], [21, 54, 12]]
  it('is able to split an array into two halves', function() {
  expect(split(evenArray)).toEqual(splitEven);
  expect(split(oddArray)).toEqual(splitOdd);
  });
});

describe('Merge Sort', function(){
  var evenArray = [1, 3, 3, 2];
  var oddArray = [7, 13, 21, 54, 12]
  var firstArray = [1, 2, 3, 4]
  var secondArray = [5, 6, 7, 8]
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge(firstArray, secondArray)).toEqual([1, 2, 3, 4, 5 ,6 ,7, 8]);
  });
  it('is able to sort an unsorted array', function(){
  expect(mergeSort(evenArray)).toEqual([1, 2, 3, 3]);
  expect(mergeSort(oddArray)).toEqual([7, 12, 13, 21, 54]);
});
});
