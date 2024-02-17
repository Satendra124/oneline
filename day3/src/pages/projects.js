import { motion } from 'framer-motion';
import '../styles/skills.css';
import AVATAR_SKILLS from '../assets/avatar_intro.svg';
import PORTFOLIO from '../assets/portfolio_mobile.png';
import RAJKOSH from '../assets/rajkosh.png';
import OFFLINE_SURVEY from '../assets/offlinesurvey.png';
import FOREST from '../assets/forest.webp';

const Projects = ({ progress }) => {
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

    const getBodyAnimation = () => {
        if (progress <= 0.1) {
            // in animation from side
            return { x: -300 + progress * 300, opacity: progress / 0.1, scale: progress / 0.1 }
        } else if (progress >= 0.95) {
            // out animation from side
            return { x: 100 - (progress - 0.95) * 100, opacity: 0, scale: 0 }
        } else if (progress < 0.95 && progress > 0.1) {
            return { y: 50 - (progress - 0.1) * 850 / 0.95, opacity: 1, scale: 1 }
        }
    }

    const projects = [
        {
            name: 'Scroll Portfolio',
            photo: PORTFOLIO,
            descriptions: [
                {
                    title: 'Custom Scroll Handling',
                    info: 'Implemented manual scroll handing to render dynamic content, animation and code with every scroll.'
                },
                {
                    title: 'Animations',
                    info: 'Used framer-motion to create animations on scroll. Modular Design with posibility for JSON based whitelabeling.'
                }
            ],
            link: 'https://github.com/satendraraj/Scroll-Portfolio',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            ],
            duration: 'Feb 2024'
        },
        {
            name: 'Offline Survey App',
            photo: OFFLINE_SURVEY,
            descriptions: [
                {
                    title: 'Data Syncronization',
                    info: 'Logics to synchronize data between client and server even if app is in offline mode.'
                },
                {
                    title: 'Customizable',
                    info: 'Ability to create surveys from admin panel with any kind of fields like text, number, background-audio, location etc.'
                },
            ],
            fetures: [
                'Auto syncronization',
                'Data persistency',
                'Highly coustomizable',
                'Access control'
            ],
            link: 'https://github.com/satendraraj/Offline-Survey',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
            ],
            duration: 'November 2023'
        },
        {
            name: 'Raj Kosh',
            photo: RAJKOSH,
            fetures: [
                'Offline mode',
                'Data persistance',
                'Modular design',
                'Responsive design'
            ],
            descriptions: [
                {
                    title: 'Dashboard and Customizability',
                    info: 'Fully customizable geolocation based forms using admin panel. Support for all types of geomarkers like polyline, marker, polygon.'
                },
                {
                    title: 'Redux and Saga',
                    info: 'Achived scalable design using redux and saga pattern. Easy Debugging using deguggers.'
                },
            ],
            duration: 'Sept 2021 - Nov 2021',
            link: 'https://github.com/satendraraj/Raj-Kosh',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
            ]
        },
        {
            name: 'Forest Classifier',
            photo: FOREST,
            fetures: [
                'Simple design',
                'High Impact',
                'Multi language Support',
            ],
            descriptions: [
                {
                    title: 'Insert Data and export pdf',
                    info: 'Ability to insert Logs data to calculate various parameters and finally export pdf for office use.'
                },
                {
                    title: 'High Impact',
                    info: 'Impacted more than 100+ ground staff with colaboration with IFS officers to achieve high impact reducing manual time and effort.'
                }
            ],
            duration: 'December 2022',
            link: 'https://satendraraj.github.io/Forest-Classifier/',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            ]
        }
    ]

    const otherProjects = [
        'https://github.com/satendraraj/Raj-Kosh',
        'https://github.com/satendraraj/Forest-Classifier',
        'https://github.com/satendraraj/Scroll-Portfolio',
        'https://github.com/satendraraj/Offline-Survey',
        'https://github.com/satendraraj/Portfolio'
    ]


    return (
        <div className="info-container">
            <motion.div className='header' animate={getBodyAnimation()} initial={{ opacity: 0 }}>
                <div className='avatar-small'>
                    <img src={AVATAR_SKILLS} alt='satendra' />
                </div>
                <div className='title'>While I dont work. I CODE.</div>
            </motion.div>
            <motion.div className='body' animate={getBodyAnimation()} initial={{ opacity: 0 }}>
                {
                    projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))
                }

                {/* <div className='projects-container other-projects'>
                    <div className='other-project-title'>Many other small contributions</div>
                    {
                        otherProjects.map((project, index) => (
                            <div key={index} className='link'>
                                <a href={project} target='_blank' rel='noreferrer'>{project}</a>
                            </div>
                        ))
                    }
                </div> */}


            </motion.div>
        </div>
    )
}
const Project = (
    { name, photo, duration, exposures, descriptions, link }
) => {
    return (
        <div className='projects-container'>
            <div className='company'>
                <div className='company-logo'>
                    <img src={photo} alt='nium' />
                </div>
                <div className='exposures'>
                    {
                        exposures.map((exp, index) => <div key={index} className='exposure'>
                            <img src={exp} alt={exp} />
                        </div>)
                    }
                </div>
            </div>
            <div className='info'>
                <div className='roleContainer'>
                    <div className='role'>{name}</div>
                    <div className='duration'>{duration}</div>
                </div>
                <div className='description'>
                    {
                        descriptions.map((desc, index) => (
                            <>
                                <div className='info-title'>{desc.title}</div>
                                <div className='info-text'>{desc.info}</div>
                            </>
                        ))
                    }
                </div>
                <div className='link-container'>
                <div className='link'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        <a href={link} target='_blank' rel='noreferrer'>
                        Check out
                        {/* <img src={AVATAR_SKILLS} alt='link' /> */}
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;