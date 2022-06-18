import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { withHistory } from 'slate-history'
import { createEditor, Descendant, Editor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

type EditorProps = {
  initialValue: Descendant[]
  setEditorContent: Dispatch<SetStateAction<Descendant[]>>
}

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>
}

export default function EditorCompose({
  initialValue,
  setEditorContent,
}: EditorProps) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => 'set_selection' !== op.type
          )
          if (isAstChange) {
            setEditorContent(value)
          }
        }}
      >
        <Editable
          placeholder="Enter some plain text..."
          renderElement={renderElement}
          onKeyDown={(event) => {
            if (event.key === '`' && event.ctrlKey) {
              event.preventDefault()
              // Determine whether any of the currently selected blocks are code blocks.
              const [match] = Editor.nodes(editor, {
                match: (n) => n.type === 'code',
              })
              // Toggle the block type depending on whether there's already a match.
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: (n) => Editor.isBlock(editor, n) }
              )
            }
          }}
        />
      </Slate>
    </>
  )
}
