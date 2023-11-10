"use client"
import { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./editorTools";

export default function Editor({ onChange, holder }:{onChange: any; holder: string}) {
  //add a reference to editor
  const ref:any = useRef();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!!window && !ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        async onChange(api, event) {
          const data:OutputData = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    
      <div className="p-24">
      <div id='editorjs' className="prose max-w-full" />
    </div>
  );
};