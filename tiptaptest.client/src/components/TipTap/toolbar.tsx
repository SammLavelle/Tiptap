import { useCurrentEditor } from "@tiptap/react";

const TipTapToolbar = () => {
    const { editor } = useCurrentEditor()
    if (!editor) {
        return null
    }

    return (
         <div className="control-group">
      <div className="button-group">
        <button
            onClick={() => editor.chain().focus().setFontFamily('serif').run()}
            className={editor.isActive('textStyle', { fontFamily: 'serif' }) ? 'is-active' : ''}
            data-test-id="serif"
          >
            Serif
          </button>
          <button
            onClick={() => editor.chain().focus().setFontFamily('sans-serif').run()}
            className={editor.isActive('textStyle', { fontFamily: 'sans-serif' }) ? 'is-active' : ''}
            data-test-id="sans-serif"
          >
            Sans Serif
          </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>
         <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
          >
            Underline
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          >
            Left
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          >
            Center
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          >
            Right
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
          >
            Justify
          </button>
		  <button
		  	onClick={() => editor.chain().focus().addIndent().run()}
			>
				Indent text
			</button>

           <input
            type="color"
            onInput={event => editor.chain().focus().setColor(event.target.value).run()}
            value={editor.getAttributes('textStyle').color}
            data-testid="setColor"
          />
           <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}
          >
            Highlight
          </button>
          <button
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={editor.isActive('subscript') ? 'is-active' : ''}
          >
            Subscript
          </button>
           <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={editor.isActive('superscript') ? 'is-active' : ''}
          >
            Superscript
          </button>
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
          </div>
          <div className="button-group">
            <button
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
          >
            Insert table
          </button>
          <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
            Add column before
          </button>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()}>Add column after</button>
          <button onClick={() => editor.chain().focus().deleteColumn().run()}>Delete column</button>
          <button onClick={() => editor.chain().focus().addRowBefore().run()}>Add row before</button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()}>Add row after</button>
          <button onClick={() => editor.chain().focus().deleteRow().run()}>Delete row</button>
          <button onClick={() => editor.chain().focus().deleteTable().run()}>Delete table</button>
          <button onClick={() => editor.chain().focus().mergeCells().run()}>Merge cells</button>
          <button onClick={() => editor.chain().focus().splitCell().run()}>Split cell</button>
          <button onClick={() => editor.chain().focus().toggleHeaderColumn().run()}>
            Toggle header column
          </button>
          <button onClick={() => editor.chain().focus().toggleHeaderRow().run()}>
            Toggle header row
          </button>
          <button onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
            Toggle header cell
          </button>
          <button onClick={() => editor.chain().focus().fixTables().run()}>Fix tables</button>
          </div>
          <div className="button-group">

        <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            H3
          </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Ordered list
        </button>
		<button onClick={() => editor.chain().focus().setImage({ src: "https://picsum.photos/200" }).run()}>
			Insert image
		</button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button onClick={() => editor.chain().focus().setPageBreak().run()}>
          Insert page break
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}>
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          Redo
        </button>
      </div>
    </div>
    )
}

export default TipTapToolbar;