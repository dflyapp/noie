import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  createdAt: Date
  name: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Data>
) {
  if (req.method === 'GET') {
    const result = await prisma.images.findMany()
    res.json(result)
  } else if (req.method === 'POST') {
    const result = await prisma.images.create({
      data: {
        ...req.body,
      },
    })
    res.json(result)
  }
}
