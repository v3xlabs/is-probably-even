export type Countable = bigint | number | string | [Countable];
export const isProbablyEven = (value: Countable) => Number(value) % 2 === 0;
