
describe('Bubble Sort', function(){
  var array = [4, 7, 3, 1];
  var sorted = [1, 3, 4, 7];
beforeAll(function () {
  spyOn(window, 'swap').and.callThrough()
})
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('returns a sorted array', function () {

    expect(bubbleSort(array)).toEqual(sorted);
  });
  it('calls swap 5 times', function () {
    expect(window.swap.calls.count()).toEqual(5);
  })
});
