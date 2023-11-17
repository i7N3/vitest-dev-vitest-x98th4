// time: O(n), space: O(1)
export const reverseInteger = (input: number): number => {
  let reversedNumber = 0;
  const isInputNegative = input < 0;
  input = Math.abs(input);

  while (input !== 0) {
    const lastDigit = input % 10;
    input = Math.floor(input / 10);

    if (isOverflow(reversedNumber, lastDigit)) {
      return 0;
    }

    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return isInputNegative ? -reversedNumber : reversedNumber;
};

const MAX_INT_VALUE = 2 ** 31 - 1;
const THRESHOLD_FOR_OVERFLOW = Math.floor(MAX_INT_VALUE / 10);

const isOverflow = (currentValue: number, digitToAdd: number) => {
  return (
    currentValue > THRESHOLD_FOR_OVERFLOW ||
    (currentValue === THRESHOLD_FOR_OVERFLOW && digitToAdd > MAX_INT_VALUE % 10)
  );
};
