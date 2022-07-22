/**
 * shuffles array of given values
 * @param numbers array of numbers
 * @returns shuffled array
 */
export const shuffle = <T>(numbers: T[]): T[] => {
  // making copy of array
  let arr = [...numbers];

  for (let i = 0; i < numbers.length; i++) {
    let random = Math.floor(Math.random() * i);

    // swap values
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }

  return arr;
};
