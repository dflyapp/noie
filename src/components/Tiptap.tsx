import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { Dispatch } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 0.25rem;

  a {
    border: 1px solid gray;
    margin: 2px;
    border-radius: 4px;
    font-size: 10px;
    padding: 2px;
    cursor: pointer;

    &.is-active {
      background: gray;
      color: white;
    }
  }

  .ProseMirror {
    padding: 0.5rem;
  }
`

type Props = {
  setEditorContent?: Dispatch<any>
  editable: boolean
  content?: any
}

const Tiptap = ({ setEditorContent, editable = false, content }: Props) => {
  const editor = useEditor({
    editable,
    extensions: [StarterKit, Image],
    content: content || '<p>Hello World! 🌎️</p>',
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      console.log(json)
      if (setEditorContent) {
        setEditorContent(json)
      }
    },
  })

  return (
    <Wrapper>
      {editable && (
        <>
          <MenuBar editor={editor} />
          <hr className="my-2" />
        </>
      )}
      <EditorContent editor={editor} />
    </Wrapper>
  )
}

export default Tiptap

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <>
      <a
        onClick={addImage}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        +image
      </a>
      <a
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </a>
      <a
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </a>
      <a
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </a>
      <a
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </a>
      {/* <a onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </a>
      <a onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </a> */}
      <a
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </a>
      <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </a>
      <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </a>
      <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </a>
      {/* <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </a> */}
      {/* <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </a>
      <a
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </a> */}
      <a
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </a>
      <a
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </a>
      {/* <a
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </a> */}
      {/* <a
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </a> */}
      {/* <a onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </a>
      <a onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </a> */}
      {/* <a onClick={() => editor.chain().focus().undo().run()}>undo</a>
      <a onClick={() => editor.chain().focus().redo().run()}>redo</a> */}
    </>
  )
}
