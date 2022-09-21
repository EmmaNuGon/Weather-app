import React from "react";
import s from "../weatherInfo/weatherInfo.module.css";

export function MainInfo({ weather }) {
  return (
    <div className={s.mainInfo}>
      <div className={s.city}>{weather?.location.name}</div>
      <div className={s.country}>{weather?.location.country}</div>
      <div className={s.row}>
        <img
          src={`http:${weather?.current.condition.icon}`}
          width="150"
          alt={weather?.current.condition.text}
        />
      </div>
      <div className={s.condition}>
        <div className={s.condition}>{weather?.current.condition.text}</div>
        <div className={s.current}>{weather?.current.temp_c}°</div>
      </div>

      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.72335579956!2d${weather?.location.lon}666!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1663791990592!5m2!1ses-419!2sar`}
        width="100%"
        height="300"
        loading="lazy">

        </iframe>
    </div>
  );
}
