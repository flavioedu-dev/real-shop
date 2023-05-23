import styles from './DataForm.module.css'

import { ChangeEvent, useState } from 'react'
import PrimaryInput from '../PrimaryInput/PrimaryInput'

const DataForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [adress, setAdress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postcode, setPostcode] = useState("")
  const [email, setEmail] = useState("")

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handleChangeAdress = (e: ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value)
  }

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  const handleChangePostcode = (e: ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value)
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
        <form className={styles.data_container}>
          <div>
          <PrimaryInput type="text" label="Primeiro nome" name={"fistName"} placeholder="Digite seu nome" value={firstName} onchange={handleChangeFirstName}></PrimaryInput>
          <PrimaryInput type="text" label="Sobrenome" name={"lastName"} placeholder="Digite seu sobrenome" value={lastName} onchange={handleChangeLastName}></PrimaryInput>
          </div>
          <PrimaryInput type="text" label="Endereço" name={"adress"} placeholder="Digite seu endereço" value={adress} onchange={handleChangeAdress}></PrimaryInput>
          <div>
          <PrimaryInput type="text" label="Cidade" name={"city"} placeholder="Digite a cidade" value={city} onchange={handleChangeCity}></PrimaryInput>
          <PrimaryInput type="text" label="Estado" name={"state"} placeholder="Digite o estado" value={state} onchange={handleChangeState}></PrimaryInput>
          <PrimaryInput type="number" label="Número" name={"postcode"} placeholder="Digite o número" value={postcode} onchange={handleChangePostcode}></PrimaryInput>
          </div>
          <PrimaryInput type="email" label="Email" name={"email"} placeholder="Digite seu email" value={email} onchange={handleChangeEmail}></PrimaryInput>

          <button>Enviar</button>
        </form>
  )
}

export default DataForm
