import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  name: string | null
  email: string | null
  emailVerfied?: Date
  image: string | null
  isAdmin: boolean
} | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const userId = req.query.id.toString()

  if (req.method === 'GET') {
    const result = await prisma.user.findUnique({
      where: { email: userId },
    })
    res.json(result)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
