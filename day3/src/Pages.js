import Contact from "./pages/contact"
import Experiences from "./pages/experiences"
import Introduction from "./pages/introduction"
import Projects from "./pages/projects"
import Skills from "./pages/skills"

const Pages = ({page, progress}) =>{

    switch(page){
        case 1:
            return (
                <>
                    <Introduction progress = {progress} page = {page}/>
                </>
            )
        case 2:
            return (
                <>
                    <Skills progress = {progress} page = {page}/>
                </>
            )
        case 3:
            return (
                <>
                    <Experiences progress = {progress} page = {page}/>
                </>
            )
        case 4:
            return (
                <>
                    <Projects progress = {progress} page = {page}/>
                </>
            )
        default:
            return <Contact progress = {progress} page = {page}/>
    }
}

export default Pages;