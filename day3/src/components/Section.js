import React, { useEffect, useState, useRef } from 'react';
import { useScroll } from './useScroll';
import { Code } from './Code';
import './styles/section.css';
import Introduction from '../pages/introduction';
const Section = () => {
    const { elRef, counter, resetCounter } = useScroll();
    const [currentPage, setCurrentPage] = useState(0);
    const [value, setValue] = useState(0);
    const scollvalAbs = 1;
    const Pages = [
        <Introduction page = {1}/>,
        <Introduction page = {2} />,
        <Introduction page = {3} />,
        <Introduction  page = {4}/>
    ]

    const code = `
        class Resume {
            public void init() { 
                Satendra me = new Satendra();
                satendra.about();
                satendra.skills();
                satendra.projects();
            }
        }
    `
    const codes = [
        code,
        code,
        code,
        code,
        code,
        code,
        code,
        code,
        code,
        code,
        code,
        code
    ]
    useEffect(()=>{
        // console.log('current page', currentPage);
        // console.log('counter', counter);
    },[counter, currentPage])


    useEffect(() => {
        const scollval = counter > 0 ? scollvalAbs : -scollvalAbs;
        if(value + scollval < code.length && value + scollval >= 0) setValue(value + (scollval > 0 ? 1 : -1));
        if(value + scollval >= code.length){
            if(currentPage < Pages.length - 1){
                setCurrentPage(currentPage + 1);
                setValue(0);
            }
            
        }
        if(value + scollval < 0) {
            if(currentPage > 0){
                setCurrentPage(currentPage - 1);
                setValue(codes[currentPage - 1].length - 1);
            }
        }
    }, [counter])

    return (
        <div ref={elRef} className='container'>
            {Pages[currentPage]}
            <Code code={codes[currentPage].slice(0, value)} counter={counter} ></Code>
        </div>
    )

};

export default Section;