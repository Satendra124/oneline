import './styles/code.css';
import { motion } from 'framer-motion';
import CodeEditor from '@uiw/react-textarea-code-editor';


export const Code = ({code, setLanguage, language})=>{

    return (
        <motion.div className="code w-tc-editor-var"
            initial={{ x: 100}}
            animate={{ x: 0}}
        >
            <div className='language-selector'>
                <span className={`language ${language === "js" ? "active" : ""}`} onClick={()=>setLanguage("js")}>JS</span>
                <span className={`language ${language === "java" ? "active" : ""}`} onClick={()=>setLanguage("java")}>Java</span>
            </div>
            <CodeEditor
                value={code}
                language={language}
                placeholder="Please enter JS code."
                data-color-mode='dark'
                onChange={()=>{}}
                disabled
                style={{
                    backgroundColor: "#282c34",
                    flex:1,
                    fontSize: "12px",
                    borderRadius: "5px",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                />
            {/* <pre style={{ whiteSpace: 'pre-wrap', tabSize: 4 }}>
                 {code}
            </pre> */}
        </motion.div>
    )
}