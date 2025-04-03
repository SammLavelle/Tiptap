import { Node } from "@tiptap/core";

export const Indent = Node.create({
    name: "indent",
    group: "inline",
    inline: true,

    parseHTML() {
        return [{ tag: "span.indent-text-single" }];
    },

    renderHTML({ HTMLAttributes }) {
        return ["span", { class: "indent-text-single", ...HTMLAttributes }];
    },

    addCommands() {
        return {
            addIndent: () => ({ commands }) => {
                return commands.insertContent({
                    type: "indent",
                });
            },
        };
    },
});