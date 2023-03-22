import React from 'react';
import o from "./CardOne.module.css";

export default function CardOne(props) {
  return (
    <div className={o.CardOne}>
      <img className={o.one} src={props.img}/>
      <h1 className={o.title}>{props.title}</h1>
      <p className={o.lorem}>{props.lorem}</p>
      <button className={o.btn}>{props.btn}</button>
    </div>
  )
}
