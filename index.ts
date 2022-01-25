export type Countable = bigint | number | string | [Countable];
export const isProbablyEven = (value: Countable, bias: number = 4) => {
    const truth = Number(value) % 2 === 0;
    return Math.random() > 1 / bias ? truth : !truth;
};
