// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCards } from '../../service/mockCards';

export default function products(req: NextApiRequest, res: NextApiResponse<any>) {
  return res.status(200).json({ products: mockCards });
}
