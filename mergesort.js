function split(wholeArray) {
  size = wholeArray.length
  console.log(wholeArray)
  // console.log(size)
  if(size%2) {
    return [wholeArray.slice(0, Math.floor(size/2)), wholeArray.slice(Math.floor(size/2))]
  }else {
    return [wholeArray.slice(0, size/2), wholeArray.slice(size/2)]
  }
}

function merge(firstArray, secondArray) {
  let output = []
  while(firstArray.length || secondArray.length) {
    if(firstArray[0]<secondArray[0] || !secondArray.length) {
      output.push(firstArray.shift())
    }else{
      output.push(secondArray.shift())
    }
  }
  return output;
}

function mergeSort(array) {
  if(array.length==1) {
    return array
  }
  else if(array.length==2){
    return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]))
  } else {
    return mergeSort(split(array));
  }


}
