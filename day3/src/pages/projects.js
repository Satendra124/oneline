import {motion} from 'framer-motion';
import '../styles/skills.css';
import AVATAR_SKILLS from '../assets/avatar_intro.svg';

const Projects = ({progress}) => {
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
            <motion.div className='header' animate={getBodyAnimation()}>
                <div className='avatar-small'>
                    <img src={AVATAR_SKILLS} alt='satendra'/>
                </div>
                <div className='title'>While I dont work. I CODE.</div>
            </motion.div>
            <motion.div className='body' animate={getBodyAnimation()}>
                <div className='projects-container'>
                    <div>This portfolio!</div>
                </div>
                <div className='projects-container'>
                    <div>Offline Survey app</div>
                </div>
                <div className='projects-container'>
                    <div>Raj Kosh</div>
                </div>
                <div className='projects-container'>
                    <div>Forest Classifier</div>
                </div>
                <div className='projects-container'>
                    <div>Many more small projects</div>
                </div>
                
                
            </motion.div>
        </div>
    )
}

export default Projects;