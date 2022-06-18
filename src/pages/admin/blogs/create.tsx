import Head from 'next/head'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { useMemo, useState } from 'react'
import { withHistory } from 'slate-history'
import axios from 'axios'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

import IsAdmin from 'layouts/IsAdmin'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

type Inputs = {
  id: string
  title: string
  slug: string
  description: string
  content: any
}

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

export default function CreateBlog() {
  const router = useRouter()
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: 'This is editable plain text' }],
    },
  ]
  const [editorContent, setEditorContent] = useState<any>(initialValue)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.id = uuidv4()
    data.content = editorContent
    axios.post('/api/blogs', data).then(() => {
      router.push('/admin/blogs')
    })
  }

  console.log(watch('title')) // watch input value by passing the name of it
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

        <section className="w-full md:w-1/2">
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
            <div className="border p-2">
              <Slate
                editor={editor}
                value={initialValue}
                onChange={(value) => {
                  const isAstChange = editor.operations.some(
                    (op) => 'set_selection' !== op.type
                  )
                  if (isAstChange) {
                    // Save the value to Local Storage.
                    const content = JSON.stringify(value)
                    // localStorage.setItem('content', content)
                    setEditorContent(value)
                  }
                }}
              >
                <Editable placeholder="Enter some plain text..." />
              </Slate>
              {errors.content && (
                <span className="text-light text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

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
