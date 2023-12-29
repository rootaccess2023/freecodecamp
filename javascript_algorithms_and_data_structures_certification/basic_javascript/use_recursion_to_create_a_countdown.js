function countdown(n) {
  // Base case: if n is less than 1, return an empty array
  if (n < 1) {
    return [];
  } else {
    // Recursive case: call the countdown function with n-1 and concatenate n to the result
    return [n].concat(countdown(n - 1));
  }
}
