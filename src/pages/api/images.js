import prisma from 'lib/prisma'

export default async function handle(req, res) {
  const result = await prisma.images.findMany()
  res.json(result)
}
