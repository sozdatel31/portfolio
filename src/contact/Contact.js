import React from 'react'
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer} `}>
                <h3>Contact</h3>
                <form action="" className={style.form}>
                    <input placeholder={"Name"} className={style.input} />
                    <input placeholder={"Email"} className={style.input}/>
                    <textarea placeholder={"Your message"} className={style.textarea}/>

                </form>
                <button>Send</button>
            </div>

        </div>
    );
}

export default Contact;
