import { useState } from "react";
import Pages from "./Pages";
import { Code } from "./components/Code";

const AppScafold = ({counter}) => {
    // conter will be 1.43 means 1st page and 43% animation completed,
    // 50% is complete animation then aniation to next page

    const page = Math.floor(counter);
    const progress = counter - page;
    const [language, setLanguage] = useState("js");

    const codejs = [
        "",
        `\nconst Resume = (skills) => {\n    const satendra = processSkills(skills);\n    alert("These skills are impressive");\n     const socials = getSatendraSocial();\n    socials.followAll();\n    }\n\n\n`,
        "\nconst satendra = getSatendra();\nconst skills = satendra.skills;\nconsole.log(skills);\nskills.forEach(skill => {\n  (async () => {\n      await enhanceSkill(skill);\n      satendra.updateSkill(skill);\n  })();\n});\nconst frameworks = getFrameworks(); \nframeworks.filter(framework => knownLanguages.contains(framework.language))\nconsole.log(frameworks);\n\n\n",
        `\nconst timemachine = new TimeMachine();\n\ntimemachine.travel(async (time)=>{\n    console.log(time, timemachine.current.satendra.company);\n})\n\nconst mHistory = timemachine.history.satendra;\nconst allPastExperiences = mHistory.all;\nconsole.log(allPastExperiences);\nanalyse(allPastExperiences);\n\n\n\n        `,
        `\nconst timemachine = new TimeMachine();\n\ntimemachine.travel(async (time)=>{\n    console.log(time, timemachine.current.satendra.company);\n})\n\nconst mHistory = timemachine.history.satendra;\nconst allPastExperiences = mHistory.all;\nconsole.log(allPastExperiences);\nanalyse(allPastExperiences);\n\n\n\n        `,
        `\nconst timemachine = new TimeMachine();\n\ntimemachine.travel(async (time)=>{\n    console.log(time, timemachine.current.satendra.company);\n})\n\nconst mHistory = timemachine.history.satendra;\nconst allPastExperiences = mHistory.all;\nconsole.log(allPastExperiences);\nanalyse(allPastExperiences);\n\n\n\n        `,
        `\nconst timemachine = new TimeMachine();\n\ntimemachine.travel(async (time)=>{\n    console.log(time, timemachine.current.satendra.company);\n})\n\nconst mHistory = timemachine.history.satendra;\nconst allPastExperiences = mHistory.all;\nconsole.log(allPastExperiences);\nanalyse(allPastExperiences);\n\n\n\n        `,
        
    ]

    const codeJava = [
        "",
        `\nclass Resume {\n    public void init() { \n        Satendra me = new Satendra();\n        ResumeProcessor.process(satendra.skills());\n        satendra.followAll();\n        satendra.hire();\n    }\n}\n\n\n`,
        "\npublic class Main {\n    public static void main(String[] args) {\n        Satendra satendra = getSatendra();\n        List<String> skills = satendra.getSkills();\n        System.out.println(skills);\n\n        for (String skill : skills) {\n            new Thread(() -> {\n                enhanceSkill(skill);\n                satendra.updateSkill(skill);\n            }).start();\n        }\n\n        List<Framework> frameworks = getFrameworks();\n        frameworks.stream()\n                .filter(framework -> knownLanguages.contains(framework.getLanguage()))\n                .forEach(System.out::println);\n    }\n}",
        `\npublic class TimeTravelApp {\n\n    public static void main(String[] args) {\n        TimeMachine timemachine = new TimeMachine();\n\n        timemachine.travel(time -> {\n            System.out.println(time + " " + timemachine.getCurrent().getSatendra().getCompany());\n        });\n\n        TimeHistory mHistory = timemachine.getHistory().getSatendra();\n        List<Experience> allPastExperiences = mHistory.getAll();\n        System.out.println(allPastExperiences);\n        analyse(allPastExperiences);\n    }\n}\n\n\n`,
        `\npublic class TimeTravelApp {\n\n    public static void main(String[] args) {\n        TimeMachine timemachine = new TimeMachine();\n\n        timemachine.travel(time -> {\n            System.out.println(time + " " + timemachine.getCurrent().getSatendra().getCompany());\n        });\n\n        TimeHistory mHistory = timemachine.getHistory().getSatendra();\n        List<Experience> allPastExperiences = mHistory.getAll();\n        System.out.println(allPastExperiences);\n        analyse(allPastExperiences);\n    }\n}\n\n\n`,
        `\npublic class TimeTravelApp {\n\n    public static void main(String[] args) {\n        TimeMachine timemachine = new TimeMachine();\n\n        timemachine.travel(time -> {\n            System.out.println(time + " " + timemachine.getCurrent().getSatendra().getCompany());\n        });\n\n        TimeHistory mHistory = timemachine.getHistory().getSatendra();\n        List<Experience> allPastExperiences = mHistory.getAll();\n        System.out.println(allPastExperiences);\n        analyse(allPastExperiences);\n    }\n}\n\n\n`,
        `\npublic class TimeTravelApp {\n\n    public static void main(String[] args) {\n        TimeMachine timemachine = new TimeMachine();\n\n        timemachine.travel(time -> {\n            System.out.println(time + " " + timemachine.getCurrent().getSatendra().getCompany());\n        });\n\n        TimeHistory mHistory = timemachine.getHistory().getSatendra();\n        List<Experience> allPastExperiences = mHistory.getAll();\n        System.out.println(allPastExperiences);\n        analyse(allPastExperiences);\n    }\n}\n\n\n`
    ];
    let code;
    if(language === "js"){
        code = codejs
    }else{
        code = codeJava
    }
    
    const totalLen = 250;
    let currentCode = code[page].slice(Math.max(0, Math.floor(code[page].length*progress-totalLen)), Math.floor(code[page].length*progress));
    // console.log(currentCode);
    const finalCode = currentCode.split("\n").reverse();
    // console.log(finalCode);
    finalCode.pop();
    finalCode.reverse();
    currentCode = finalCode.join("\n");
    // console.log(currentCode);

    console.log(page, progress);

    return (
        <>
            <Pages page = {page} progress = {progress}/>
            <Code code={currentCode} setLanguage={setLanguage} language={language}/>
        </>
        
    )
}

export default AppScafold;