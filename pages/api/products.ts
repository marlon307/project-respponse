// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCards } from '../../service/mockCards';

export default function products(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    return res.status(200).json({ products: mockCards });
  }
  return res.status(500).json({ message: 'Not found', status: 500 });
}
