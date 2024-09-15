"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import type { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const Tiptap = ({
  description,
  onChange,
  editorRef,
}: {
  description: string;
  onChange: (description: string) => void;
  editorRef: React.RefObject<Editor>;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
    editorProps: {
      attributes: {
        class: "h-full outline-none",
      },
    },
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  React.useEffect(() => {
    if (editor) {
      (editorRef as React.MutableRefObject<Editor>).current = editor;
    }
  }, [editor, editorRef]);

  return (
    <div className="rounded-[6px] border border-gray-3 min-h-[41px] [&>div]:!h-[41px] p-2 focus-within:ring transition-all">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
