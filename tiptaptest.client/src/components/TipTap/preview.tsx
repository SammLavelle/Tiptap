import { useCurrentEditor } from "@tiptap/react"

const EditorJSONPreview = () => {
    const { editor } = useCurrentEditor()

    return (
        <div className="tiptap__json-preview">
           <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre> 
        </div>
    )
}

export default EditorJSONPreview;