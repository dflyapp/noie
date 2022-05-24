import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  id: string
  createdAt: Date
  name: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const imageId = req.query.id.toString()

  if (req.method === 'DELETE') {
    const result = await prisma.images.delete({
      where: { id: imageId }
    })
    res.json(result)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
