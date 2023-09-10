import React,{useState, useRef, useEffect} from "react";
import logo from "../../../assets/png/figma.png"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Tween } from "react-gsap";
import gsap from 'gsap'

import Prev from '../../../assets/png/icon_prev.svg';
import Next from '../../../assets/png/icon_next.svg';

gsap.registerPlugin(ScrollTrigger);

const Test=()=>{
    const imgRef = useRef(null);
    
    useEffect(() => {
      const el = imgRef.current;
      gsap.fromTo(
        el,
        { rotation: 0 },
        {
          rotation: 180,
          duration: 3,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    }, []);
    return (
       <div style={{height:'1000px'}}>
         
        <div className="square" style={{ width: '1300px', height: '1000px'}} >
            <Tween
            from={{
            opacity:0
            }}
            to={{
            opacity:1,
            scrollTrigger: {
                trigger: '.section-title',
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                markers: true,
            },
            }}
        >
            <h1 className="section-title">Projects</h1>
            </Tween>
          {/* <Carousel pages={callbackList} setting={bannerSettings} setRef={setRef} setIdx={setCurrentSlide}/> */}
          <div className='banner-btn'>
              <img src={Prev} alt="prev-btn"/> 
              <img src={Next} alt="next-btn"/> 
          </div>
        </div>
      
       </div>
    );
  }
export default Test