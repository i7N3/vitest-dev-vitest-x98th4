export const solution = (c: number[]): number => {
  let jumps = 0;

  for (let i = 0; i < c.length; ) {
    const maxStep = c[i + 2];
    if (i > 0) jumps++;
    if (maxStep === 0) i = i + 2;
    else i++;
  }

  return jumps;
};
