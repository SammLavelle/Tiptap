import { EditorProvider } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import TipTapToolbar from "./toolbar";
import EditorJSONPreview from "./preview";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from '@tiptap/extension-font-family'
import { Color } from "@tiptap/extension-color";
import Highlight from '@tiptap/extension-highlight'
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from '@tiptap/extension-image';
import { PageBreak } from "./CustomNodes/Pagebreak";
import { Indent } from "./CustomNodes/Indent";
import Mention from "@tiptap/extension-mention";
import suggestion from "./CustomNodes/AutoCompletedVariables/suggestion";

import "./editor.css";
import DownloadSampleButton from "./DownloadSampleButton";

const extensions = [
    StarterKit,
    Underline,
    TextAlign.configure({
        types: ['paragraph'],
    }),
    TextStyle.configure({ 
        mergeNestedSpanStyles: true, 
    }),
    FontFamily,
    Color.configure({
        types: ['textStyle'],
    }),
    Highlight.configure({ 
        multicolor: true,
    }),
    Subscript,
    Superscript,
    Table.configure({
        resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
	Image.configure({
		inline: true,
	}),
	PageBreak,
	Indent,
	Mention.configure({ 
		renderHTML(props) {
			const { node } = props;
			return [
				"span",
				{},
				`{{${node.attrs.id}}}`,
			];
		},
		suggestion,
	}),
];

const content ="<p>Hello World hellooo</p>";

const TipTap = () => {
    return (
        <div className="tiptap__editor">
            <EditorProvider 
                extensions={extensions} 
                content={content}
                slotBefore={<><TipTapToolbar /><DownloadSampleButton /></>}
                slotAfter={<EditorJSONPreview />}
            >
            </EditorProvider>
        </div>
        
    )
};

export default TipTap;