const calcPercentage = (discount: number, price: number) => {
  const calc = (price * discount) / 100;
  return calc;
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
    const valueCalc = price * quantity;
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
