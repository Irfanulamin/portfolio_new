import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui/toggle";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdOutlineFormatStrikethrough } from "react-icons/md";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border border-input bg-transparent rounded-br-md">
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <MdOutlineFormatStrikethrough className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
