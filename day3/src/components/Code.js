import './styles/code.css';
import { motion } from 'framer-motion';

export const Code = ({code})=>{

    return (
        <motion.div className="code"
            initial={{ x: 100}}
            animate={{ x: 0}}
        >
            <pre style={{ whiteSpace: 'pre-wrap', tabSize: 4 }}>
                 {code}
            </pre>
        </motion.div>
    )
}