'use client'
import { Button, Input } from "@/components";
import { FormEvent, useState } from "react";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function Login(){
  const router = useRouter()
  const [loginData, setLoginData] = useState({username:'', password: ''})
  const onChangeLoginData = ({name, value}: {name:string, value: string | number }) => setLoginData({...loginData, [name]: value})
  const submit = async (e: SubmitEvent | FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const loginResult = await login(loginData.username, loginData.password)
    if(loginResult) router.push('/admin')
  }

  return (
    <div className="w-full flex justify-center items-center flex-col py-4 lg:py-16 lg:px-0 px-4
       bg-vina-yellow-medium text-vina-purple-dark dark:bg-vina-blue-dark dark:text-vina-yellow-dark min-h-screen">
      <h1 className="text-center lg:text-3xl">
        Ingreso a Usuarios
      </h1>
        <form className="mt-12 flex flex-col gap-8 items-center" onSubmit={ (e) => submit(e)}>
          <Input type="text" label="Nombre de usuario" name="username" value={loginData.username} onChange={onChangeLoginData} />
          <Input type="password" label="Contraseña" name="password" value={loginData.password} onChange={onChangeLoginData} />
          <Button type="submit" onClick={submit}>Ingreso</Button>
        </form>
    </div>
  )
}