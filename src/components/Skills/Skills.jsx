import React from 'react'
import './Skills.css'
import Header from '../Header/Header'
import skillsVector from './../../assets/skills_vector.png'
import {skillList} from './../../assets/skillsData'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <div className="section-container">
            <Header 
            heading ="My skills"
            details="Below are the various technologies I have worked with!"
            />
            <div className="skill-card-container">
                {skillList.map(({skillName,skillUrl}) => {
                    return (<SkillCard skillName ={skillName}  skillUrl = {skillUrl} />)
                })
                }
            </div>
            <div className="skills-vector-frame">
                 <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    )
}

export default Skills
