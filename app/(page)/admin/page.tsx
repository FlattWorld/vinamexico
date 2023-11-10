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
    <>
      <Editor onChange={updatePost} holder="editorjs" />
      {JSON.stringify(postInfo)}
      <Button onClick={savePost}>Save</Button>
    </>
  );
};