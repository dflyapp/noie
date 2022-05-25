import type { NextApiRequest, NextApiResponse } from 'next'
import S3 from 'aws-sdk/clients/s3'

type Response = {
  id: string
  createdAt: Date
  name: string | null
}

// ref: https://docs.digitalocean.com/products/spaces/resources/s3-sdk-examples/
// ref: https://betterprogramming.pub/how-to-upload-files-to-amazon-s3-from-nextjs-app-b7ef1909976b
// example: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/s3/src

const s3 = new S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
  signatureVersion: 'v4',
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    let { name, type } = req.body
    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentType: type,
    }
    const url = await s3.getSignedUrlPromise('putObject', fileParams)
    res.status(200).json({ url })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Set desired value here
    },
  },
}
