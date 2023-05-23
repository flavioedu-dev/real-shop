import { ChangeEvent } from "react";
import "./PrimaryInput.module.css"

import { Input } from "@chakra-ui/react"

interface PrimaryInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onchange(e: ChangeEvent<HTMLInputElement>): void;
}

const PrimaryInput = ({ type, label, name, placeholder, value, onchange }: PrimaryInputProps) => {
  return (
    <>
    <label>
      {label}
      <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onchange}></Input>
    </label>
    </>
  )
}

export default PrimaryInput