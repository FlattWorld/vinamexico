import { InputProps } from "@/types/componentTypes"
import { useState } from "react"

const Input = ({
  label,
  type,
  name,
  icon,
  value,
  onChange,
  required= true,
  disabled = false,
  max=999,
  className='',
}: InputProps) => {
 const [inUse, setInUse] = useState(false)
 const onFocus = () => setInUse(true)
 const onBlur = () => !value && setInUse(false)
  return ( 
    <label htmlFor={name} onFocus={onFocus} className={`border-2 h-12 border-vina-blue-dark  relative px-2 py-3 text-vina-blue-dark
     dark:text-white dark:border-white rounded-md ${className}`}>
      <span
        className={`absolute bg-vina-yellow-medium dark:bg-vina-blue-dark px-1 transition-all transform
                    ${inUse ? '-translate-y-5 text-xs':'translate-y-0'}`}>
        {label}
        </span>
      <input
        className="bg-transparent border-none p-0 focus:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none w-full"
        id={name}
        name={name}
        type={type}
        onBlur={onBlur}
        value={value}
        required={required}
        onChange={(e) => onChange({name, value: e.target.value} )}
        maxLength={max}
      />
      {icon}
    </label>
  )
}

export default Input