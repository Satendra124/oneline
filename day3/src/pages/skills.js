import {motion} from 'framer-motion';
import '../styles/skills.css';
import AVATAR_SKILLS from '../assets/avatar_intro.svg';

const Skills = ({progress}) => {
    const startAnimationPercentage = Math.min(1,progress/0.2);
    const endAnimationPercentage = 1 - Math.min(1,(progress-0.7)/0.3) ;

    const getAnimation = () => {
        if (progress < 0.2) {
            return {
                x: startAnimationPercentage,
                opacity: startAnimationPercentage,
                scale: startAnimationPercentage
            }
        } else if (progress > 0.7) {
            return {x: endAnimationPercentage,
            opacity: endAnimationPercentage,
            scale: endAnimationPercentage}
        } else {
            return {opacity: 1, scale: 1}
        }
    }

    const getBodyAnimation = () => {
        if(progress <= 0.1) {
            // in animation from side
            return {x: -300+progress*300, opacity: progress/0.1, scale: progress/0.1}
        }else if(progress >= 0.95) {
            // out animation from side
            return {x: 100-(progress-0.95)*100, opacity: 0, scale: 0}
        } else if (progress < 0.7 && progress>0.2) {
            return {y: -300-(progress-0.2)*300, opacity: 1, scale: 1}
        }
    }

    return (
        <div className="info-container">
            <motion.div className='header' animate={getBodyAnimation()} initial={{opacity: 0}}>
                <div className='avatar-small'>
                    <img src={AVATAR_SKILLS} alt='satendra'/>
                </div>
                <div className='title'>What do I even know?</div>
            </motion.div>
            <motion.div className='body' animate={getBodyAnimation()} initial={{opacity: 0}}>
                <div className='languages-container'>
                    <div className='languages'>Languages: </div>
                    <div className='skill-section'>
                        <div className='skill small'>JS</div>
                        <div className='skill small'>TS</div>
                        <div className='skill small'>Python</div>
                        <div className='skill small'>Java</div>
                    </div>
                </div>
                <div className='frameworks-container'>
                    <div className='languages'>Frameworks: </div>
                    <div className='skill-section'>
                        <div className='skill small'>React.js</div>
                        <div className='skill small'>Spring Boot</div>
                        <div className='skill small'>Express.js</div>
                        <div className='skill small'>Flask</div>
                    </div>
                </div>
                <div className='technologies-container'>
                    <div className='languages'>Technologies: </div>
                    <div className='skill-section'>
                        <div className='skill small'>Docker</div>
                        <div className='skill small'>Kubernetes</div>
                        <div className='skill small'>AWS</div>
                        <div className='skill small'>GCP</div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills;