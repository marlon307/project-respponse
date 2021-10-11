const calcPercentage = (discount: number, price: number) => (
  (discount * price) / 100).toFixed(2);

export default calcPercentage;
