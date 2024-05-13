"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ setContent }: { setContent: any }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "",
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[32rem] border-input bg-slate-300 p-2",
      },
    },
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
