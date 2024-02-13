import AVATAR_INTRO from '../assets/avatar_intro.svg';
import '../styles/introduction.css';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { motion } from 'framer-motion';
import ScrollableDiv from '../components/ScrollableDiv';

const Introduction = ({ progress }) => {
    /**
     * Animation - 
     * 0.0 - 0.2 entry animation
     * 0.2 - 0.4 - text writing animation
     * 0.4 - 0.7 - scroller
     * 0.7 - 0.9 - code 
     * 0.9 - 1.0 - exit animation
     */
    const startAnimationPercentage = Math.min(1, progress / 0.2);
    const endAnimationPercentage = 1 - Math.min(1, (progress - 0.7) / 0.3);

    const getAnimation = () => {
        if (progress < 0.2) {
            return {
                x: startAnimationPercentage,
                opacity: startAnimationPercentage,
                scale: startAnimationPercentage
            }
        } else if (progress > 0.7) {
            return {
                x: endAnimationPercentage,
                opacity: endAnimationPercentage,
                scale: endAnimationPercentage
            }
        } else {
            return { opacity: 1, scale: 1 }
        }
    }

    const getName = ()=>{
        if(progress<0.2) return "";
        else return ("Satendra Raj").slice(0,Math.min(12, Math.floor(((progress-0.2))*40)));
    }

    return (
        // <ScrollableDiv progress={progress} from={0.2} to={0.7}>
            <div className='introduction info-container' id='introduction'>
                <motion.div
                    animate={getAnimation()}
                    // animate={{ x: 0, opacity: 1, scale: 1}}
                    className='avatar'
                ><img src={AVATAR_INTRO} alt='satendra' /></motion.div>
                <motion.div className='intro'
                    animate={getAnimation()}
                >
                    <div className='greeting'>Hello, there!</div>
                    <div className='name'>I'm <span className='nameInternal'>{getName()}</span></div>
                    <div className='title'>I am a Full stack developer</div>
                    <div className='quote'>No, I cannot fix your computer</div>
                    <div className='social'>
                        <SocialIcon url="www.instagram.com" className="social-icon" />
                        <SocialIcon url="www.linkedin.com" className="social-icon" />
                        <SocialIcon url="www.github.com" className="social-icon" />
                    </div>
                </motion.div>
                <div className='scroll-indicator'>
                    <span>Relax! and scroll down</span>
                </div>
            </div>
        // </ScrollableDiv>
    )
}

export default Introduction;