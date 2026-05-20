"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";
import Navbar from "./navbar";


export function useWindowWidth() {


const [windowWidth, setWindowWidth] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
});
    useEffect(() => {
        function handleResize() {
            setWindowWidth({ width: window.innerWidth });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth.width;
}

export function Nav(){
    const width = useWindowWidth();

    return (
        <>
            {width < 768 ? (
                <MobileMenu />
            ) : (
                <Navbar />
            )}
        </>
    )
}