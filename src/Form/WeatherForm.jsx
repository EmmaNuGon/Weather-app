import { useState } from 'react'
import s from '../Form/weatherForm.module.css'

export function WeatherForm({onChangeCity}) {
    const[city,setCity]= useState(" ")

function onChange(e){
    const value = e.target.value
    if(value !== ""){
        setCity(value)
       
       }
    }

    function handleSubmit(e){
        e.preventDefault()
        onChangeCity(city)
        setCity(" ")
     }

  return (
    <form onSubmit={handleSubmit} className={s.container}>
        <input type="text" onChange={onChange} value={city} className={s.input}/>
        <input className={s.button} type="submit"  onClick={handleSubmit}/>
    </form>
  )
}

