import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  createdAt: Date
  slug: string | null
  title: string | null
  description: string | null
  content: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Data>
) {
  if (req.method === 'GET') {
    const result = await prisma.blogs.findMany()
    res.json(result)
  } else if (req.method === 'POST') {
    const result = await prisma.blogs.create({
      data: {
        ...req.body,
      },
    })
    res.json(result)
  }
}
