import type { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { listRevalidate } = req.body;
    if (listRevalidate.length) {
      // https://stackoverflow.com/questions/71807293/how-to-invalidate-array-of-sluges-in-next-js
      await Promise.all(listRevalidate
        .map(async (url: string) => res.unstable_revalidate(`/product/${url}`)));

      return res.json({ revalidated: true });
    }
    return res.status(400).json({ message: 'Not page validates' });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
