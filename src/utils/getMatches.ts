/**
 * returns array of matches
 * @param n number of matches to generate
 * @returns Match[]
 */
export const getMatches = (n: number): Match[] => {
  // returns array of objects with an index (0-9) and a show prop (boolean)
  return [...Array(n * 2).keys()].map((n) => {
    let index = n >= 10 ? n - 10 : n;
    return { index, show: false };
  });
};

type Match = {
  index: number;
  show: boolean;
};
