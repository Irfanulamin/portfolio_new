import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const UploadBlogs = () => {
  return (
    <div className="w-full py-10 px-5">
      <div>
        <h4 className="text-xl font-bold">Create A Blog</h4>
        <p className="text-base font-medium">upload your blog in one second!</p>
      </div>
      <div className="py-6">
        <form>
          <label className="font-semibold ">Title</label>
          <Input type="text" className="m-3" placeholder="Title" />
          <label className="font-semibold ">Image</label>
          <Input type="text" className="m-3" placeholder="Image" />
          <label className="font-semibold ">Content</label>
          <Textarea className="m-3" placeholder="Type your message here." />
          <button
            className="w-full py-2 bg-black text-white rounded hover:bg-white hover:text-black text-xl font-semibold smooth_transition "
            type="submit"
          >
            Upload !
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBlogs;
