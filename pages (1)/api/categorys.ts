// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categorys } from '../../service/mockCategory';
import { mockminObjectCards2 } from '../../service/mockCards';

export default function home(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    return res.status(200).json({
      categorys,
      products: mockminObjectCards2,
    });
  }
  return res.status(500).json({ message: 'Not found', status: 500 });
}
