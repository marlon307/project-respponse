// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCards } from '../../../service/mockCards';

export default function productId(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;

  const product = mockCards.find((findProduct) => findProduct.id === Number(id));
  if (product) {
    return res.status(200).json({ product });
  }
  return res.status(404).json({ message: 'Product not found', status: 404 });
}
