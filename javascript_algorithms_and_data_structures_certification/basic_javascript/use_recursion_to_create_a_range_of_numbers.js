function rangeOfNumbers(startNum, endNum) {
  // Base case: if startNum is greater than endNum, return an empty array
  if (startNum > endNum) {
    return [];
  } else {
    // Recursive case: call the rangeOfNumbers function with startNum + 1 and concatenate startNum to the result
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  }
}
