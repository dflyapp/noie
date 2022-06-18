import { useCallback, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

type Props = {
  value: Descendant[]
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

  return (
    <Slate editor={editor} value={value}>
      <Editable renderElement={renderElement} readOnly />
    </Slate>
  )
}
