import { useEffect, useRef, useState } from "react";

export function useScroll() {
    const elRef = useRef();
    const [counter, setCounter] = useState(0);
    const touchY = useRef(0);
    const [scrollPercentage, setScrollPercentage] = useState(1.2);
    const syncronizer = 50;
    const scrollSpeed = 0.01;
    const totalPages = 5.99;
    
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                // console.log(e);
                e.preventDefault();
                // console.log(e.deltaY);
                if (e.deltaY === 0) return;
                setCounter(e.deltaY);
            };
            const ontouchstart = e => {
                e.preventDefault();
                touchY.current = (e.touches[0].clientY);
            };
            const ontouchmove = e => {
                e.preventDefault();
                setCounter(-(e.changedTouches[0].clientY-touchY.current)/syncronizer);
            }
            const ontouchend = e => {
                e.preventDefault();
                setCounter(0);
                touchY.current = (0);
            }
            el.addEventListener("wheel", onWheel);
            el.addEventListener("touchstart", ontouchstart);
            el.addEventListener("touchmove", ontouchmove);
            el.addEventListener("touchend", ontouchend);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    useEffect(() => {
        setScrollPercentage(s => {
            const news = s + (counter > 0 ? scrollSpeed : -scrollSpeed);
            return Math.max(1, Math.min(totalPages, news));
        });
    }, [counter]);

    return { elRef, scrollPercentage };
}