import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { HistoryEditor, withHistory } from 'slate-history'
import {
  createEditor,
  Descendant,
  Editor,
  Transforms,
  Text,
  BaseEditor,
  Element,
} from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type EditorType = BaseEditor & ReactEditor & HistoryEditor

type CustomElement = {
  bold: boolean | null
  type: 'paragraph' | 'code' | null
  children: CustomText[]
}

type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const CustomEditor = {
  isBoldMarkActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.bold === true, // n.bold === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor: EditorType) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor: EditorType) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor: EditorType) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: (n) => Editor.isBlock(editor, n) }
    )
  },
}

type EditorProps = {
  initialValue: Descendant[]
  setEditorContent?: Dispatch<SetStateAction<Descendant[]>>
  showTools: boolean
  readOnly: boolean
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

export default function MyEditor({
  initialValue,
  setEditorContent,
  showTools,
  readOnly,
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

  const renderLeaf = useCallback((props: any) => {
    return <Leaf {...props} />
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
          if (isAstChange && setEditorContent) {
            setEditorContent(value)
          }
        }}
      >
        {showTools && (
          <div className="mb-8">
            <a
              className="round-md cursor-pointer bg-gray-500 p-1 text-xs text-white"
              onClick={() => CustomEditor.toggleBoldMark(editor)}
            >
              Bold
            </a>
            <a
              className="round-md ml-4 cursor-pointer bg-gray-500 p-1 text-xs text-white "
              onClick={() => CustomEditor.toggleCodeBlock(editor)}
            >
              Code Block
            </a>
          </div>
        )}
        <Editable
          readOnly={readOnly}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return
            }

            switch (event.key) {
              case '`': {
                event.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
                break
              }

              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              }
            }
          }}
        />
      </Slate>
    </>
  )
}
