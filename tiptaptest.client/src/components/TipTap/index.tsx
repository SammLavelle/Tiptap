import { EditorProvider } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import TipTapToolbar from "./toolbar";
import EditorJSONPreview from "./preview";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

const extensions = [
    StarterKit,
    Underline,
    TextAlign.configure({
        types: ['paragraph'],
    }),
    TextStyle, 
    Color.configure({
        types: ['textStyle'],
    }),
    Subscript,
    Superscript
];

const content ="<p>Hello World</p>";

const TipTap = () => {
    return (
        <div className="tiptap__editor">
            <EditorProvider 
                extensions={extensions} 
                content={content}
                slotBefore={<TipTapToolbar />}
                slotAfter={<EditorJSONPreview />}
            >
            </EditorProvider>
        </div>
        
    )
};

export default TipTap;