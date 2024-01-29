import React, { useState } from 'react'
import s from './header.module.scss'
import { ReactComponent as RadioIcon } from '../../../../assets/images/icons/basic/radio.svg'
import { ReactComponent as AccountIcon } from '../../../../assets/images/icons/basic/account.svg'
import { ReactComponent as DashboardIcon } from '../../../../assets/images/icons/basic/dashboard.svg'
import { ReactComponent as StatisticIcon } from '../../../../assets/images/icons/basic/statistic.svg'
import { ReactComponent as AppLogo } from '../../../../assets/images/icons/basic/app.svg'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    function navigateRadio() {
        navigate("/radio");
    }
    function navigateDashboard() {
        navigate("/dashboard");
    }
    return (
        <div className={s.headerContainer}>
            <div className={s.buttonBlock}>
                <button className={s.appLogoContainer}>
                    <AppLogo className={s.buttonIcon}/>
                </button>
                <button className={s.button} type="button" onClick={navigateRadio}>
                    <RadioIcon className={s.buttonIcon}/>
                </button>
                <button className={s.button} type="button" onClick={navigateDashboard}>
                    <DashboardIcon className={s.buttonIcon} />
                </button>
                <button className={s.button}>
                    <StatisticIcon className={s.buttonIcon}/>
                </button>
            </div>
            <div className={s.profile}>
                <AccountIcon className={s.buttonIcon}/>
            </div>
        </div>
    )
}