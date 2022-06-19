import { useCallback, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

type Props = {
  value: Descendant[]
}

const Leaf = (props: any) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

export default function MyEditor({ value }: Props) {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback(
    ({ attributes, children, element }: any) => {
      switch (element.type) {
        case 'code':
          return <code {...attributes}>{children}</code>
        case 'quote':
          return <blockquote {...attributes}>{children}</blockquote>
        case 'link':
          return (
            <a {...attributes} href={element.url}>
              {children}
            </a>
          )
        default:
          return <p {...attributes}>{children}</p>
      }
    },
    []
  )
  const renderLeaf = useCallback((props: any) => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} value={value}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly
      />
    </Slate>
  )
}
