'use client'
import { Input, Button } from "@/components";
import { InputProps } from "@/types/componentTypes";
import { FormEvent, FormEventHandler, useState } from "react";
import { eventService } from "@/services/eventServices";

const Contador = ({
  label,
  type,
  name,
  icon,
  value,
  onChange,
  disabled = false,
}: InputProps) => {

  const changeAmount = (increment: number) => {
    const numberValue = Number(value) 
    if(typeof numberValue !== 'number') onChange({name, value: 0})
    const newValue = numberValue + increment
    if(numberValue + increment < 0 || numberValue + increment > 99) onChange({name, value: 0})
    else onChange({name, value: newValue})
  }

  const getTotal = () => {
    const numberValue = Number(value)
    const total = 150+numberValue*150
    return total.toLocaleString('en-mx')
  }
  
 return (
  <div className=" h-12 px-2 py-3 text-vina-blue-dark dark:text-white flex gap-4 items-center">

 <label className="">
 <span>
   {label}
   </span>
  </label>
  <button type='button' onClick={() => changeAmount(-1)} className="border-black dark:text-white text-xl rounded-full border dark:border-white h-8 w-8 hover:bg-white dark:hover:bg-black">
    -
  </button>
  <input
    className="bg-transparent p-2 focus:ring-0 focus:outline-none active:outline-none
    dark:border-white rounded-md border-vina-blue-dark border-2 w-16 appearance-none text-center"
    id={name}
    name={name}
    type={type}
    min={0}
    max={99}
    value={value}
    onChange={(e) => onChange({name, value: e.target.value})}
    />
  <button type='button' onClick={() => changeAmount(1)} className="border-black dark:text-white text-xl rounded-full border dark:border-white h-8 w-8 hover:bg-white dark:hover:bg-black">+</button>
 {icon}
 <span>Total: ${getTotal()}</span>
</div>
)}

export default function Event({params}:{params:{slug:string}}){
  const [eventFormData, setEventFormData] = useState({name:'', lastName:'', church: '', mail:'', phone: '', city:'', state:'', accompanying: 0, hosting: false})
  const [success, setSuccess] = useState(false)
  const onChangeData = ({name, value}:{name: string, value: string | number | boolean}) => setEventFormData({...eventFormData, [name]: value}) 
  const submit = async (e:Event | FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     const response = await eventService.addAttendant(params.slug, {attendants: eventFormData})
     if(response.status === 204) setSuccess(true)
  }
  return (
    <div className="bg-vina-yellow-medium dark:bg-vina-blue-dark flex flex-col items-center min-h-screen">
      <iframe src="/evento1.pdf" width={'100%'} height={'500px'} />
      <h1 className="text-3xl dark:text-white text-center mt-8 mb-12">Registro preliminar</h1>
      { success ? <div className="dark:text-white"><h2 className="text-2xl">¡Gracias por registrate!</h2> <span>Nos pondremos en contacto contigo</span></div> :
      <form className="flex flex-col gap-4 w-full max-w-xl" onSubmit={(e) => submit(e)}>
        <Input type="text" label="Nombre" name="name" onChange={onChangeData} value={eventFormData.name}  />
        <Input type="text" label="Apellidos" name="lastName" onChange={onChangeData} value={eventFormData.lastName}  />
        <Input type="text" label="Iglesia" name="church" onChange={onChangeData} value={eventFormData.church}  />
        <Input type="text" label="Estado" name="state" onChange={onChangeData} value={eventFormData.state}  />
        <Input type="text" label="Ciudad" name="city" onChange={onChangeData} value={eventFormData.city}  />
        <Input type="tel" label="Teléfono" name="phone" onChange={onChangeData} value={eventFormData.phone}  />
        <Input type="email" label="Correo Electrónico" name="mail" onChange={onChangeData} value={eventFormData.mail}  />
        <Contador type="number" label="Acompañantes" name="accompanying" onChange={onChangeData} value={eventFormData.accompanying}  />
        <label htmlFor="hosting" className="dark:text-white text-vina-blue-dark flex gap-12 items-center my-4">
          <span>¿Requiere Hospedaje?</span>
          <input type="checkbox" id="hosting" name="hosting"
          checked={eventFormData.hosting}
          onChange={(e) => onChangeData({name: 'hosting', value: e.target.checked})} />
        </label>
        <Button type="submit" >Registrarse</Button>
      </form>
}
    </div>
  )
}