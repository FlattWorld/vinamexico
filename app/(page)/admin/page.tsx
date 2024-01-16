"use client"
import dynamic from 'next/dynamic'
import { useState } from "react";
import { Button } from "@/components";
const Editor = dynamic(() => import ('./Editor'),{ssr:false});

export default function Admin() {
const [postInfo, setPostInfo] = useState()

const updatePost = (data:any) => { setPostInfo(data) }
const savePost = () => { console.log("save") }

  return (
    <div className='w-full border min-h-screen'>
      <Editor onChange={updatePost} holder="editorjs" />
      <div className='w-full flex justify-center'>
        <Button onClick={savePost}>Guardar Post</Button>
        </div>
    </div>
  );
};