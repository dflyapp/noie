import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  id: string
  createdAt: Date
  slug: string | null
  description: string | null
  content: any
} | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const blogId = req.query.id.toString()

  if (req.method === 'GET') {
    const result = await prisma.blogs.findUnique({
      where: { id: blogId },
    })
    res.json(result)
  } else if (req.method === 'DELETE') {
    const result = await prisma.blogs.delete({
      where: { id: blogId },
    })
    res.json(result)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
