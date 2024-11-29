// const integer = 3;

function takesInteger(integer) {
  const isRemainder = integer % 2;
  if (isRemainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}
takesInteger(3);

// check if the number is even them return even. check im integer is odd then return odd
