// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCards } from '../../../service/mockCards';

export default function productId(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const product = mockCards.find((findProduct) => findProduct.id === Number(id));
    if (product) {
      return res.status(200).json({ product });
    }
    return res.status(404).json({ message: 'Product not found', status: 404 });
  }
  return res.status(500).json({ message: 'Not found', status: 500 });
}
