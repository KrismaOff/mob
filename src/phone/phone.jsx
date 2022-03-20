import React from 'react'
import './phone.css'
import smS from './img.svg'
import smA from './ampersand.png'

export default function phone() {
    return (
        <div>
            <div className='title'>
                K<img className='wordS' src={smS} alt="" />AMPUS <img className='amp' src={smA} alt="" />
                <p className='textUnder' >Умный помощник для развития <br /> бизнес-команд</p>
            </div>

            <div className='authorization'>
                <div className='authTitle' >Авторизация</div>
                <div className='textUnderAuth' >С возвращением, пройдите авторизацию чтобы начать обучение</div>
            </div>

            <div className='inputPlace'>
                <span className='emlInpStr'>
                    <input className='email' type="text" placeholder='Адрес корпоративной почты' /> </span><br />
                <span className='pswInpStr'>
                    <input className='password' type="text" placeholder='Пароль' />
                    <button className="fgPsw">Забыли пароль?</button>
                </span>

                <button className='logBtn'>Войти</button>
            </div>

        </div>
    )
}
