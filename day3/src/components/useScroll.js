import { useEffect, useRef, useState } from "react";

export function useScroll() {
    const elRef = useRef();
    const [counter, setCounter] = useState(0);
    const [posititon, setPosition] = useState({
        counter: 0,
        intial: 0
    });
    const touchY = useRef(0);
    const [scrollPercentage, setScrollPercentage] = useState(1.2);
    const syncronizer = 1;
    const scrollSpeed = 0.01;
    const totalPages = 5.99;
    const minScroll = 1.2;
    
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                // console.log(e);
                e.preventDefault();
                // console.log(e.deltaY);
                if (e.deltaY === 0) return;
                // setCounter(e.deltaY);
                setPosition({
                    counter: e.deltaY,
                    intial: 0
                })
            };
            const ontouchstart = e => {
                e.preventDefault();
                // touchY.current = (e.touches[0].clientY);
                setPosition({
                    counter: 0,
                    intial: (e.touches[0].clientY)
                });
            };
            const ontouchmove = e => {
                e.preventDefault();
                // const diff = e.changedTouches[0].clientY-touchY.current;
                // console.log(diff/syncronizer);
                setPosition(cur => {
                    return {
                        ...cur,
                        counter: -(e.changedTouches[0].clientY-cur.intial)/syncronizer,
                        intial: e.changedTouches[0].clientY
                    }
                })
                // setCounter(-(e.changedTouches[0].clientY-touchY.current)/syncronizer);
            }
            const ontouchend = e => {
                e.preventDefault();
                setPosition({
                    counter: 0,
                    intial: 0
                })
                // setCounter(0);
                // touchY.current = (0);
            }
            el.addEventListener("wheel", onWheel);
            el.addEventListener("touchstart", ontouchstart);
            el.addEventListener("touchmove", ontouchmove);
            el.addEventListener("touchend", ontouchend);
            return () => {
                el.removeEventListener("wheel", onWheel);
                el.removeEventListener("touchstart", ontouchstart);
                el.removeEventListener("touchmove", ontouchmove);
                el.removeEventListener("touchend", ontouchend);
            };
        } 
    }, []);

    useEffect(() => {
        setScrollPercentage(s => {
            const news = s + (posititon.counter/1000);//> 0 ? scrollSpeed : -scrollSpeed);
            return Math.max(minScroll, Math.min(totalPages, news));
        });
    }, [posititon]);

    return { elRef, scrollPercentage };
}