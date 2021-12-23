const calcPercentage = (discount: number, price: number) => {
  const calc = (discount * price) / 100;
  return Number(calc.toFixed(2));
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
    const valueCalc = (acc += quantity) * price;
    const caltDescount = valueCalc - calcPercentage(discount, valueCalc);
    return caltDescount;
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
