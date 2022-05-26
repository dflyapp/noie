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
      children: [
        { text: 'This is editable plain text, just like a <textarea>!' },
      ],
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
    ;(data.id = uuidv4()), (data.content = editorContent)
    console.log(data)
    axios.post('/api/blogs', data).then(() => {
      router.push('/admin/blogs')
    })
  }

  console.log(watch('title')) // watch input value by passing the name of it
  return (
    <article className="container mx-auto py-12">
      <Head>
        <title>Admin - Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <nav className="flex">
        <Link href="/admin">
          <span className="text-left cursor-pointer block underline text-red-500">
            Admin
          </span>
        </Link>
        <Link href="/admin/blogs">
          <span className="ml-4 text-left cursor-pointer block underline text-red-500">
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
              className="border mr-2 px-2 py-1 w-full"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-light text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* slug */}
          <div className="mt-2">
            <label htmlFor="title">Slug</label>
            <input
              id="slug"
              className="border mr-2 px-2 py-1 w-full"
              {...register('slug', { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-light text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* description */}
          <div className="mt-2">
            <label htmlFor="description">Description</label>
            <input
              id="slug"
              className="border mr-2 px-2 py-1 w-full"
              {...register('description', { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-light text-sm">
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
                  console.log(content)
                  setEditorContent(value)
                }
              }}
            >
              <Editable placeholder="Enter some plain text..." />
            </Slate>
            {errors.content && (
              <span className="text-red-500 text-light text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4">
            <input
              className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer hover:opacity-80"
              type="submit"
              value="Create new blog"
            />
          </div>
        </form>
      </section>
    </article>
  )
}
