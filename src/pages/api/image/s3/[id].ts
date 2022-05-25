import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY || '',
    secretAccessKey: process.env.SECRET_KEY || '',
  }
})

type Response = {
  name: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const imageName = req.query.id.toString()

  if (req.method === 'DELETE') {
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: imageName,
      })
    )
    res.json({ name: imageName })
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
