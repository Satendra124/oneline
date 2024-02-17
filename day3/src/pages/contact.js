import AVATAR_INTRO from '../assets/avatar_intro.svg';
import '../styles/introduction.css';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { motion } from 'framer-motion';

const Contact = ({progress}) => {
    // start animation from 0.0 to 0.2 .. 0.2 - 0.8 .. 0.8 - 1.0 end animations
    const startAnimationPercentage = Math.min(1,progress/0.2);
    const endAnimationPercentage = 1 - Math.min(1,(progress-0.7)/0.3) ;


    const getAnimation = () => {
        if (progress < 0.2) {
            return {
                x: startAnimationPercentage,
                opacity: startAnimationPercentage,
                scale: startAnimationPercentage
            }
        } else {
            return {opacity: 1, scale: 1}
        }
    }

    return (
        <div className='introduction info-container' id='introduction'>
                <motion.div 
                    animate={getAnimation()}
                    // animate={{ x: 0, opacity: 1, scale: 1}}
                    className='avatar'
                ><img src={AVATAR_INTRO} alt='satendra'/></motion.div>
                <motion.div className='intro'
                    animate={getAnimation()}
                >
                    <div className='greeting'>Lets get in touch!</div>
                    <div className='name'>I'm <span className='nameInternal'>Satendra</span></div>
                    <div className='quote'>And I may be the only one who can fix your bug</div>
                    <div className='quote'>satendra.exe@gmail.com</div>
                    <div className='social'>
                        <SocialIcon url="www.instagram.com/satendra_124" className="social-icon"/>
                        <SocialIcon url="www.linkedin.com/in/satendra-raj-90421219b" className="social-icon"/>
                        <SocialIcon url="www.github.com/satendra124" className="social-icon"/>
                    </div>
                </motion.div>
            </div>
    )
}

export default Contact;