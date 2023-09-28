type normalFunction = {
    (num1: string | number, num2?: string | number): number;
};
declare var accAdd: normalFunction;
declare var accSub: normalFunction;
declare var accDiv: normalFunction;
declare var accMul: normalFunction;
declare const exactToPrecision: (num: number, precision?: number) => string;
export { accAdd, accDiv, accMul, accSub, exactToPrecision };
