import { Node } from "@tiptap/core";

export const PageBreak = Node.create({
    name: "pageBreak",
    group: "block",

    parseHTML() {
        return [{ tag: "div.page-break" }];
    },

    renderHTML({ HTMLAttributes }) {
        return ["div", { class: "page-break", ...HTMLAttributes }];
    },

    addCommands() {
        return {
            setPageBreak: () => ({ commands }) => {
                return commands.insertContent({
                    type: "pageBreak",
                });
            },
        };
    },
});