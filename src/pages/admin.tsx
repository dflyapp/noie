import Link from 'next/link'

export default function Admin() {
  return (
    <article className='py-24'>
      <h1 className="text-center">Admin Page</h1>
      <div className='flex justify-center mt-12'>
        <div className="flex items-center">
          <Link href="/admin/gallery">
            <a className="text-lg text-red-700 underline mx-12 p-4 hover:opacity-50">Gallery</a>
          </Link>
          <Link href="/admin/blogs">
            <a className="text-lg text-red-700 underline mx-12 p-4 hover:opacity-50">Blogs</a>
          </Link>
        </div>
      </div>
    </article>
  )
}
