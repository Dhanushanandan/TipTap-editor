import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";

// Core Extensions
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";

import { HeadingButton } from "@/components/tiptap-ui/heading-button";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),

      Highlight,
      TextStyle,
      Color,

      // ✅ FIX: Link Config
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
      }),

      // ✅ FIX: Image Config
      Image.configure({
        allowBase64: true,
        inline: false,
      }),

      Blockquote,
      CodeBlock,

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: "<p>TipTap editor Type Here</p>",
  });

  if (!editor) return null;

  return (
    <div>
      {/* ---------- Toolbar ---------- */}
      <div className="toolbar">

        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </button>

        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Number List
        </button>

        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Quote
        </button>

        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          Code Block
        </button>

        <button onClick={() => editor.chain().focus().toggleHighlight().run()}>
          Highlight
        </button>

        {/* Text Color */}
        <input
          type="color"
          onChange={(e) =>
            editor.chain().focus().setColor(e.target.value).run()
          }
        />

        {/* Link */}
        <button
          onClick={() => {
            const url = prompt("Enter URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
        >
          Link
        </button>

        {/* Image */}
        <button
          onClick={() => {
            const url = prompt("Image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
        >
          Image
        </button>

        {/* Text Align */}
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          Left
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          Center
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          Right
        </button>

        {/* Undo / Redo */}
        <button onClick={() => editor.chain().focus().undo().run()}>Undo</button>
        <button onClick={() => editor.chain().focus().redo().run()}>Redo</button>

      </div>

      {/* Editor */}
      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>

      {/* Headings */}
      <div className="headings">
        <HeadingButton level={1} editor={editor}>Heading 1</HeadingButton>
        <HeadingButton level={2} editor={editor}>Heading 2</HeadingButton>
        <HeadingButton level={3} editor={editor}>Heading 3</HeadingButton>
      </div>
    </div>
  );
}
