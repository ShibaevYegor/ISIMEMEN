import React from 'react';
import h from "./Header.module.css";
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <div className={h.Header}>


        <marquee behavior="scroll" direction="left">внимание!!! данный сайт создан школьником и является лишь вспомогательным материалом для практики и портфолио!!!</marquee>


        <div className="container">
        <nav className={h.nav}>
            <a className={h.logo} href="#">
                <img className={h.logoImg} src={logo}/>
            </a>
            
            <ul className={h.ul}> 
                <li className={h.li}>
                    <a className={h.ssilka}>HOME</a>
                </li>
                <li className={h.li}>
                    <a className={h.ssilka}>ABOUT</a>
                </li>
                <li className={h.li}>
                    <a className={h.ssilka}>WORK WITH US</a>
                </li>
                <li className={h.li}>
                    <a className={h.ssilka}>CLIENT WINS</a>
                </li>
                <li className={h.li}>
                    <a className={h.ssilka}>EMPLOYERS</a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
