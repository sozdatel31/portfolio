import React from 'react'
import style from './Work.module.css';


function Work(props) {
    return (
        <div className={style.workBlock}>

            <div className={style.image}>
                <button className={style.btn}>View</button>
                {/*<img src={props.imgURL} />*/}
            </div>
            <h2 className={style.workName}>
                {props.workName}
            </h2>
            <h3 className={style.description}>
                {props.workDescription}
            </h3>
        </div>
    );
}

export default Work;
