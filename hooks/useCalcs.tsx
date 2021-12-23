type ArrObj = Array<{
  quantity: number;
  price: number;
  discount: number
}>

const calcAllValuesArray = (array: ArrObj) => {
  const value = array.reduce((
    accumulator,
    { quantity, price },
  ) => {
    let acc = accumulator;
    const valueCalc = price * quantity;
    acc += valueCalc;
    return acc;
  }, 0);

  const format = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return format;
};

export default calcAllValuesArray;
