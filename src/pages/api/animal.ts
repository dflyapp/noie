import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const result = await prisma.animal.findMany()
  res.status(200).json(result)
}
