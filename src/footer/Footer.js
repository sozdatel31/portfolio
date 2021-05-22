import React from 'react'
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                <h3 className={style.title}>Pavel Herasimchuk</h3>
                <div className={style.socialContainer}>
                <div className={style.socialNetwork}></div>
                <div className={style.socialNetwork}></div>
                <div className={style.socialNetwork}></div>
                </div>
                <h4 className={style.title}>2021, All rights reserved</h4>
            </div>

        </div>
    );
}

export default Footer;
