const calcPercentage = (discount: number, price: number) => {
  const calc = (discount * price) / 100;
  const result = Number(calc.toFixed(2));
  return result;
};

type ArrObj = Array<{
  quantity: number;
  price: number;
  discount: number
}>

const calcAllValuesArray = (array: ArrObj) => {
  const value = array.reduce((
    accumulator,
    { quantity, price, discount },
  ) => {
    let acc = accumulator;
    const valueCalc = Number((price * quantity).toFixed(2));
    // const caltDescount = (valueCalc - calcPercentage(discount, valueCalc)).toPrecision(4);
    const caltDescount = valueCalc - calcPercentage(discount, valueCalc);
    acc += caltDescount;
    return acc;
  }, 0);

  const format = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return format;
};

export {
  calcPercentage,
  calcAllValuesArray,
};
