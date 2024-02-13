import { motion } from 'framer-motion';

const ScrollableDiv = ({ children, progress, from, to }) => {
    // animate scroll smooth till end to children when progress is {from}-{to}
    return (
        <motion.div
            
        >
            {children}
        </motion.div>
    )
}

export default ScrollableDiv;