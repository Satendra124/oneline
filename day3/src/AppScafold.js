import Pages from "./Pages";
import { Code } from "./components/Code";

const AppScafold = ({counter}) => {
    // conter will be 1.43 means 1st page and 43% animation completed,
    // 50% is complete animation then aniation to next page

    const page = Math.floor(counter);
    const progress = counter - page;
    
    return (
        <>
            <Pages page = {page} progress = {progress}/>
            <Code code={"Hello "+ page + " "+progress}/>
        </>
        
    )
}

export default AppScafold;