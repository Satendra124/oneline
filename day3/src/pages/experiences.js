import { motion } from 'framer-motion';
import '../styles/skills.css';
import AVATAR_SKILLS from '../assets/avatar_intro.svg';
import NIUM_LOGO from '../assets/nium.webp';
import HUBERT_CURIN from '../assets/hubert curin.png';
import TRUCKX_LOGO from '../assets/truckx.jpeg';
import EXPLORIN_LOGO from '../assets/explorin.jpeg';
import PRODETI_LOGO from '../assets/prodeti.png';
import CLICKSVAULT from '../assets/clicksvault.webp';
import INTERVU_LOGO from '../assets/intervu.png';
import IITBHU from '../assets/iitbhu.png';


const Experiences = ({ progress }) => {
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
            return { y: 50 - (progress - 0.1) * 750 / 0.95, opacity: 1, scale: 1 }
        }
    }

    const experiences = [
        {
            companyName: 'Nium, Bangalore',
            companyLogo: NIUM_LOGO,
            role: 'SDE 1',
            duration: 'Jun 2023 - Present',
            exposures: [

                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
            ],
            descriptions: [
                {
                    title: 'Nium Forex',
                    info: 'Worked in a team of 6 to develop FE for NIUM Forex integration in React.js'
                },
                {
                    title: 'Instarem Platform',
                    info: 'Worked in multiple services in JAVA for feture development/design and deployment'
                }
            ]
        },
        {
            companyName: 'UJM Hubert Curin, France',
            companyLogo: HUBERT_CURIN,
            role: 'Research Intern',
            duration: 'May 2022 - July 2022',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            ],
            descriptions: [
                {
                    title: 'C Liberary',
                    info: 'Implemented Compression, Decompression, Encoding and Decoding algorithms of JSON-LD data to CBOR-LD data',
                },
                {
                    title: 'Optimization and Debugging',
                    info: 'Completed implementation with most optimal approch following the standard specification which latter was ran on IOT Devices to convert data on the fly.',
                }
            ]
        },
        {
            companyName: 'Truckx, Pune',
            companyLogo: TRUCKX_LOGO,
            role: 'SDE Intern',
            duration: 'Nov 2021 - Apr 2022',
            exposures: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            ],
            descriptions: [
                {
                    title: 'Driver logbook app',
                    info: 'Implented fetures like Fuel receipts, Bill of landing, Sharp turn detection, Overspeed detection, Drivewyze and more',
                },
                {
                    title: 'Fleet management App',
                    info: 'Worked on Fleet management app in Typescript and React native implementing features like WebRTC Video streaming etc.',
                }
            ]
        }
    ];

    const otherCompanies = [
        {
            logo: EXPLORIN_LOGO,
            name: 'Explorin',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            ],
        },
        {
            logo: PRODETI_LOGO,
            name: 'Prodeti',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
            ],
        },
        {
            logo: CLICKSVAULT,
            name: 'ClicksVault',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            ],
        },
        {
            logo: INTERVU_LOGO,
            name: 'Intervu',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            ],
        },
        {
            logo: IITBHU,
            name: 'IIT BHU',
            exposures: [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
            ],
        }
    ]

    let allOtherExposers = otherCompanies.map(company => company.exposures).flat();
    // filter duplicates
    allOtherExposers = [...new Set(allOtherExposers)];
// console.log(allOtherExposers);


    return (
        <div className="info-container">
            <motion.div className='header' animate={getBodyAnimation()} initial={{ opacity: 0 }}>
                <div className='avatar-small'>
                    <img src={AVATAR_SKILLS} alt='satendra' />
                </div>
                <div className='title'>Where have I been?</div>
            </motion.div>
            <motion.div className='body' animate={getBodyAnimation()} initial={{ opacity: 0 }}>
                {
                    experiences.map((exp, index) => <Experience key={index} {...exp} />)
                }
                <div className='experience-container other-companies-container'>
                    <div className='other-title'>Many other small contributions</div>
                    <div className='other-companies'>
                        {
                            otherCompanies.map((exp, index) => <img key={index} src={exp.logo} alt={exp.name} />)
                        }
                    </div>
                    <div className='other-exposures'>
                        {
                            allOtherExposers.map((exp, index) => <img key={index} src={exp} alt={exp} />)
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Experience = (
    { companyName, companyLogo, role, duration, exposures, descriptions }
) => {
    return (
        <div className='experience-container'>
            <div className='company'>
                <div className='company-logo'>
                    <img src={companyLogo} alt='nium' />
                </div>
                <div className='company-name'>{companyName}</div>
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
                    <div className='role'>{role}</div>
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
            </div>
        </div>
    )
}

export default Experiences;