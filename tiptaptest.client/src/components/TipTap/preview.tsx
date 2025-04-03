import { useCurrentEditor } from "@tiptap/react"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const EditorJSONPreview = () => {
    const { editor } = useCurrentEditor();

	const contentRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

    return (
		<>
			<button onClick={() => reactToPrintFn()}>Print / Save as PDF</button>
			<div ref={contentRef} className="tiptap__json-preview">
				{editor ? (
					<div dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
				) : (
					<p>Loading preview...</p>
				)}
			{/* <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>  */}
			</div>
		</>
		
    )
}

export default EditorJSONPreview;