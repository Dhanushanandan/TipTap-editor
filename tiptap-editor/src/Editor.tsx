import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { HeadingButton } from "@/components/tiptap-ui/heading-button";


export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
      levels: [1, 2, 3, 4, 5, 6],
    }),
    ],
    content: "<p>TipTap editor Type Here</p>",
  });

  if (!editor) return null;

  return (
    <div>
      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "active" : ""}
        >
          Bullet List
        </button>
      </div>

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>



    <div className="headings">
      <HeadingButton level={1} editor={editor}>Heading 1</HeadingButton>
      <HeadingButton level={2} editor={editor}>Heading 2</HeadingButton>
      <HeadingButton level={3} editor={editor}>Heading 3</HeadingButton>
    </div>
    </div>
  );
}
