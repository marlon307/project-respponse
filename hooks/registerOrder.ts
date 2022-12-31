import { api2 } from '../service/api';

export default async function registerOrder(
  addresId: number,
  shippingId: number,
  method_pay: string,
) {
  const { data } = await api2.post('/register_order', {
    address: addresId,
    carrie: shippingId,
    method_pay,
  }).catch(({ response }) => ({ data: response.data }));

  return data;
}
