import prisma from 'lib/prisma'

export default async function handle(req, res) {
  const result = await prisma.todo.findMany()
  res.json(result)
}
