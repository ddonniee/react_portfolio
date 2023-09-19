import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, Element } from 'react-scroll';
// utils
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Section2 = () => {
 
  const textRef = useRef(null);
  const boxRef2 = useRef(null);

useEffect(() => {


  const txtItem = gsap.context((self)=>{
    console.log(self)
    const txt = document.querySelectorAll('.text-box');
    console.log('txt--->',txt)
    txt.forEach((t)=>{
      gsap.from(t, {
        opacity:0,
        y:100,
        stagger:1,
        scrollTrigger:{
          trigger:t,
          start:'bottom bottom',
          end:'top 20%',
          scrub:true
        }
      });
      gsap.to(t, {
        y:0,
        opacity:1
      })
    },textRef)
  })
  const boxItems = gsap.context((self)=>{
    console.log(self)
    const boxes = self.selector('.skill-box');
    boxes.forEach((box)=>{
      gsap.from(box, {
        x: 500,
        opacity:0,
        stagger:1,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
      gsap.to(box, {
        x: 0,
        opacity:1
      });
    })
    },boxRef2)
    return () => {boxItems.revert(); txtItem.revert();}
    // return () => boxItems.revert();
  }, []); // <- Scope!

  return (
    <Element name="section2" className="section" id="section2">
    {/* <Tween from={{ opacity: 0 }} to={{ opacity: box2VisibleHeight/1000}} duration={0.5}> */}
    <div className='skill-wrapper' >
      <div className='text-area' ref={textRef}>
        <h1 className='text-box'>My skills</h1>
        <span className='text-box'>As a front-end developer, I possess essential skills and additional ones to effectively collaborate with other developers and designers. I am also committed to continuous learning, with an open mind, to further enhance my proficiency in development.</span>
      </div>
      <ul className='skill-lists' ref={boxRef2}>
        <li className='empty-box'></li>
        <li className='skill-box'>
          <h3>01</h3>
          <span>WEB STANDARD</span>
          <span>일관성, 접근성, 검색엔진 최적화, 보안, 플랫폼의 다양성을 보증하기위해 HTML, SCSS를 이용하여 웹표준에 준수하는 웹페이지 개발을 지향합니다.</span>
        </li>
        <li className='skill-box'>
          <h3>02</h3>
          <span>JavaScript</span>
          <span>프론트엔드 개발자에게 가장 기본 역량인 자바스크립트 스킬 향상을 위해, 바닐라 자바스크립트로 프로젝트를 진행하여 기본기에 충실하였습니다.</span>
        </li>
        <li className='skill-box'>
          <h3>03</h3>
          <span>React</span>
          <span>사용자의 경험을 향상시키기 위해, 리액트 프레임워크를 이용하여 사용자의 액션, 액션 처리중, 액션 완료를 상태로 관리하여 연속적인 경험을 이끌어냈습니다.</span></li>
        <li className='skill-box'>
          <h3>04</h3>
          <span>Git</span>
          <span>3인 이상의 개발자와 형상관리도구인 GIT을 이용하여 작업물을 공유하여 협업하여, 유지보수가 용이한 작업을 진행했습니다.</span>  
        </li>
      </ul>
    </div>
    {/* </Tween> */}
  </Element>
  );
};

export default Section2;
