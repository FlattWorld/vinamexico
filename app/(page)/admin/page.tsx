"use client"
import dynamic from 'next/dynamic'
import { useState } from "react";
import { Button } from "@/components";
import Link from 'next/link';
const Editor = dynamic(() => import ('./Editor'),{ssr:false});

export default function Admin() {
const [postInfo, setPostInfo] = useState()

const updatePost = (data:any) => { setPostInfo(data) }
const savePost = () => { console.log("save") }

  return (
    <div className='w-full border min-h-screen md:px-16 py-12'>
      <Link className='underline px-2 py-2 my-4 block' href='/admin/events'>Administrador de Eventos</Link> 

      <div className='bg-gray-200'>
        <h2>EDITOR</h2>
      <Editor onChange={updatePost} holder="editorjs" />
      </div>
      <div className='w-full flex justify-center'>
        <Button onClick={savePost}>Guardar Post</Button>
        </div>
    </div>

  );
};