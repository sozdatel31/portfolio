import React from 'react'
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Over 8+ years of IT experience which includes 3+ years of Extensive experience as a React JS Developer and 3 years of Experience as a UI/UX Developer and 2 years of Experienceas software Developer."}/>
                    <Skill title={"CSS"} description={"Good experience on customizing CSS frameworks" +
                    " like Bootstrap and Foundation using CSS pre-processors LESS or SASS and Compass."}/>
                    <Skill title={"React"} description={"Experience in using React JS components, Forms," +
                    " Events, Keys, Router, plus Redux, Animations and Flux concept."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
