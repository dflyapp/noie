import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string,
  createdAt: Date,
  name: string | null,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const result = await prisma.images.findMany()
  res.json(result)
}
