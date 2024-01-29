import React, { useEffect, useRef } from 'react'
import s from './dashboard.module.scss'
import { Header } from '../../layout/main/header/header'

export const Dashboard = () => {
return (
    <div className={s.dashboard}>
        <Header/>
        <div>
            This is dashboard page.
        </div>
    </div>
)
}