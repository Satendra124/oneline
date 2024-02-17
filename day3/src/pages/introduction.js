import AVATAR_INTRO from '../assets/avatar_intro.svg';
import '../styles/introduction.css';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { motion } from 'framer-motion';
import ScrollableDiv from '../components/ScrollableDiv';

const Introduction = ({ progress, page }) => {
    /**
     * Animation - 
     * -1.1 - 1.1 - entry
     * 1.1 - 1.9 - other animations
     * 1.9 - 2.1 - exit
     */
    const getAnimation = () => {
        if (progress <= 0.1) {
            // in animation from side
            return { x: -300 + progress * 300, opacity: progress / 0.1, scale: progress / 0.1 }
        } else if (progress >= 0.95) {
            // out animation from side
            return { x: 100 - (progress - 0.95) * 100, opacity: 0, scale: 0 }
        } else if (progress < 0.95 && progress > 0.1) {
            return { y: 50 - (progress - 0.1) * 50 / 0.95, opacity: 1, scale: 1 }
        }
    }

    const getName = ()=>{
        if(progress<0.2) return "";
        else return ("Satendra").slice(0,Math.min(9, Math.floor(((progress-0.2))*40)));
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
                {/* <motion.div className='scroll-indicator' animate={getAnimation()}>
                    <span>Relax! and scroll down</span>
                </motion.div> */}
            </div>
        // </ScrollableDiv>
    )
}

export default Introduction;