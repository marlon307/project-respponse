// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categorys, slides } from '../../service/mockCategory';

export default function home(req: NextApiRequest, res: NextApiResponse<any>) {
  return res.status(200).json({ categorys, slides });
}
