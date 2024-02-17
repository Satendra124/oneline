import {motion} from 'framer-motion';
import '../styles/skills.css';
import AVATAR_SKILLS from '../assets/avatar_intro.svg';
import PROBLEM_SOLVING from '../assets/problemsolving.png';
import SCALABLE_SYSTEMS from '../assets/scalablesystems.jpeg';
import MODERN_UI from '../assets/modernui.jpeg';
import CODE_QUALITY from '../assets/codequality.png';

const Skills = ({page, progress}) => {

    const getAnimation = () => {
        if(progress <= 0.1) {
            // in animation from side
            return {x: -300+progress*300, opacity: progress/0.1, scale: progress/0.1}
        }else if(progress >= 0.95) {
            // out animation from side
            return {x: 100-(progress-0.95)*100, opacity: 0, scale: 0}
        } else if (progress < 0.95 && progress>0.1) {
            return {y: 50 -(progress-0.1)*200/0.95, opacity: 1, scale: 1}
        }
    }

    return (
        <div className="info-container">
            <motion.div className='header' animate={getAnimation()} initial={{opacity: 0}}>
                <div className='avatar-small'>
                    <img src={AVATAR_SKILLS} alt='satendra'/>
                </div>
                <div className='title'>What do I even know?</div>
            </motion.div>
            <motion.div className='body' animate={getAnimation()} initial={{opacity: 0}} >
                <div className='languages-container'>
                    <div className='languages'>Languages: </div>
                    <div className='skill-section'>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='js'/>
                            <div>JS</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='ts'/>
                            <div>TS</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt='py'/>
                            <div>Python</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' alt='java'/>
                            <div>Java</div>
                        </div>
                    </div>
                </div>
                <div className='frameworks-container'>
                    <div className='languages'>Frameworks: </div>
                    <div className='skill-section'>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='react'/>
                            <div>React + Native</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' alt='spring'/>
                            <div>Spring Boot</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='express'/>
                            <div>Express.js</div>
                        </div>
                        <div className='skill small'>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' alt='flask'/>
                            <div>Flask</div>
                        </div>
                    </div>
                </div>
                <div className='technologies-container'>
                    <div className='languages'>Intrests: </div>
                    <div className='skill-section'>
                        <div className='skill small'>
                            <img src={PROBLEM_SOLVING} alt='git'/>
                            <div>Problem Solving</div>
                        </div>
                        <div className='skill small'>
                            <img src={SCALABLE_SYSTEMS} alt='git'/>
                            <div>Scalable Systems</div>
                        </div>
                        <div className='skill small'>
                            <img src={MODERN_UI} alt='git'/>
                            <div>Modern UI</div>
                        </div>
                        <div className='skill small'>
                            <img src={CODE_QUALITY} alt='git'/>
                            <div>Code quality</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills;