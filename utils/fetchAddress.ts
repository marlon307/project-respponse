import { notFound } from 'next/navigation';
import { api2 } from '../service/api';

export default async function getAddress(required: boolean) {
  if (required) {
    const { data } = await api2.get('/address')
      .catch(() => notFound());

    return data.address;
  }
  return [];
}
