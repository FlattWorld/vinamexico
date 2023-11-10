"use client"
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./editorTools";
import { Button } from "@/components";

export default function Editor() {

  const ref:any = useRef();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: EDITOR_TOOLS,
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

  const save = () => ref.current.save()
  .then((outputData:any) => { console.log(outputData) })
  .catch((error:any) => { console.log('Saving failed: ', error) });

  return (
    <div className="min-h-screen">
      <div className="p-24">
      <div id='editorjs' className="prose max-w-full" />
      <Button onClick={save} >Save</Button>
    </div>
    </div>
  );
};