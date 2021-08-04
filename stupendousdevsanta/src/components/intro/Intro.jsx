import React from 'react'
import './intro.scss'
import { init } from 'ityped';
import { useEffect,useRef } from 'react';


export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        console.log(textRef)
        init(textRef.current,{
            showCursor:true,
            strings:["Developer","Designer","Content Creator"],
            backDelay: 1500
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There I am</h2>
                    <h1>Santanu Phukan</h1>
                    <h3>Frelance <span ref={textRef}></span></h3>
                    
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png"/>
                </a>
            </div>
        </div>
    )
}
