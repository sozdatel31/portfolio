import React from 'react'
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Work from "./Work/Work";


function MyWorks() {
    return (
        <div className={style.WorksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer} `}>
                <h2 className={style.title}>MY WORKS</h2>
                <div className={style.works}>
                    <Work
                        imgURL={"http://vignette1.wikia.nocookie.net/logopedia/images/a/a4/Google-Currents-Featured-300x300.png"}
                        workName={"Social Network"}
                        workDescription={"Social network from strong's"}
                    />
                    <Work
                        imgURL={"http://vignette1.wikia.nocookie.net/logopedia/images/a/a4/Google-Currents-Featured-300x300.png"}
                        workName={"TodoList"}
                        workDescription={"Welcome to my App"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
