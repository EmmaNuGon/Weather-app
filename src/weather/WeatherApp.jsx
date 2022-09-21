import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {WeatherForm} from '../Form/WeatherForm'
import {MainInfo} from '../weatherInfo/MainInfo'
import s from "../weather/weatherApp.module.css"

let key="6d129c4b4f264a789e3150111222009";
let url = "http://api.weatherapi.com/v1/current.json?aqi=no";


export function WeatherApp() {
    const[weather, setWeather] = useState(null)

    useEffect(() => {
       loadInfo()
    }, [])

    
    useEffect(() => {
     document.title = `weather | ${weather?.location.name ?? ""}`
    }, [weather])

   async function loadInfo(city = "london"){
     try {
        const request = await fetch(`${url}&key=${key}&q=${city}`)

        const json =  await request.json();

        setWeather(json)

        console.log(json)
     } catch (error) {
        
     }
    }


function handleChangeCity(city){
    setWeather(null);
    loadInfo(city)
}

  return (
    <div className={s.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <MainInfo weather={weather}/>
        
    </div>
  )
}

