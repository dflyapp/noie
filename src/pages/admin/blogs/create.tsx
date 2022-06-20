import Head from 'next/head'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Descendant } from 'slate'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

import IsAdmin from 'layouts/IsAdmin'
import MyEditor from 'components/MyEditor'
import Tiptap from 'components/Tiptap'

type Inputs = {
  id: string
  title: string
  slug: string
  description: string
  content: Descendant[]
}

export default function CreateBlog() {
  const router = useRouter()

  const initialValue: Descendant[] = [
    { bold: false, type: 'paragraph', children: [{ text: 'Edit me' }] },
  ]
  const [editorContent, setEditorContent] = useState<any>(initialValue)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.id = uuidv4()
    data.content = editorContent
    console.log(editorContent)
    axios.post('/api/blogs', data).then(() => {
      router.push('/admin/blogs')
    })
  }

  return (
    <IsAdmin>
      <article className="container mx-auto py-12 px-2 sm:px-0">
        <Head>
          <title>Admin - Blogs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Toaster />

        <nav className="flex">
          <Link passHref href="/admin">
            <span className="block cursor-pointer text-left text-red-500 underline">
              Admin
            </span>
          </Link>
          <Link passHref href="/admin/blogs">
            <span className="ml-4 block cursor-pointer text-left text-red-500 underline">
              Blogs
            </span>
          </Link>
        </nav>

        <h1>Create a new blog</h1>

        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* title */}
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                className="mr-2 w-full border px-2 py-1"
                {...register('title', { required: true })}
              />
              {errors.title && (
                <span className="text-light text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* slug */}
            <div className="mt-2">
              <label htmlFor="title">Slug</label>
              <input
                id="slug"
                className="mr-2 w-full border px-2 py-1"
                {...register('slug', { required: true })}
              />
              {errors.title && (
                <span className="text-light text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* description */}
            <div className="mt-2">
              <label htmlFor="description">Description</label>
              <input
                id="slug"
                className="mr-2 w-full border px-2 py-1"
                {...register('description', { required: true })}
              />
              {errors.title && (
                <span className="text-light text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* content editor */}
            <p className="mt-2">Content</p>
            <Tiptap editable={true} setEditorContent={setEditorContent} />

            <div className="mt-4">
              <input
                className="cursor-pointer rounded-md bg-red-600 px-2 py-1 text-white hover:opacity-80"
                type="submit"
                value="Create new blog"
              />
            </div>
          </form>
        </section>
      </article>
    </IsAdmin>
  )
}
