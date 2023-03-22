import React from 'react';
import f from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={f.Footer}>
      <div className={f.box}>
        <p className={f. signingUp}>Sign up if you want pure gold in your inbox.</p>
        <div>
            <p className={f.item}>Company</p>
            <li className={f.li}>About</li>
            <li className={f.li}>Fulfilled Coaching Program</li>
            <li className={f.li}>Client Wins</li>
            <li className={f.li}>Press & Media</li>
            <li className={f.li}>Privacy</li>
            <li className={f.li}>Terms & Conditions</li>
            <li className={f.li}>Brand Design by Provoke</li>
        </div>
      </div>
      <p className={f.end}>© Copyright Isimemen 2022</p>
    </div>
  )
}
