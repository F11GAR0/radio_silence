import React from 'react'
import s from './radio.module.scss'
import { Header } from '../../layout/main/header/header'

export const Radio = () => {
return (
    <div className={s.radio}>
        <Header/>
        <div>
            This is radio page.
        </div>
    </div>
)
}