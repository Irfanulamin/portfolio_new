"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({
  setContent,
  defaultValue,
}: {
  setContent: any;
  defaultValue: any;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: defaultValue || "",
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[16rem] border-input bg-slate-300 p-2",
      },
    },

    onBlur({ editor }) {
      setContent(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[10rem]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
