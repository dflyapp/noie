import { Dispatch, SetStateAction, useMemo } from 'react'
import { withHistory } from 'slate-history'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

type EditorProps = {
  initialValue: Descendant[]
  setEditorContent: Dispatch<SetStateAction<Descendant[]>>
}

export default function Editor({
  initialValue,
  setEditorContent,
}: EditorProps) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

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
        <Editable placeholder="Enter some plain text..." />
      </Slate>
    </>
  )
}
