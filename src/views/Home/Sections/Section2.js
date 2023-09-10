import React, { useEffect, useRef, useState } from 'react';
import { Link, Element } from 'react-scroll';
// utils
import styled from 'styled-components';
import gsap from 'gsap';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
const Section2 = () => {
 
  const boxRef2 = useRef(null);

  const [box2VisibleHeight, setBox2VisibleHeight] = useState(0);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // 현재 스크롤 위치
    const scrollY = window.scrollY;
    // boxRef2의 위치 정보
    const box2Top = boxRef2.current.offsetTop;
    const box2Height = boxRef2.current.offsetHeight;
    // 화면 높이
    const windowHeight = window.innerHeight;
    
    // 현재 스크롤 위치가 boxRef2에 도달하면 box2VisibleHeight을 업데이트
    let containerHegiht = scrollY - box2Top + windowHeight;
    if (scrollY >= box2Top - windowHeight && scrollY <= box2Top + box2Height) {
      if(containerHegiht<500) {
        setBox2VisibleHeight(scrollY - box2Top + windowHeight);
      }else {
        setBox2VisibleHeight(1000);
      }
    } else {
      setBox2VisibleHeight(0);
    }
  }
  useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
      return ()=>{
          window.removeEventListener("scroll",handleScroll)
      }
  },[])

  return (
    <Element name="section2" className="section" id="section2">
    <Tween from={{ opacity: 0 }} to={{ opacity: box2VisibleHeight/1000}} duration={0.5}>
    <div className='skill-container' ref={boxRef2}>
      <div className='text-area'>
        <h1>My skills</h1>
        <span>As a front-end developer, I possess essential skills and additional ones to effectively collaborate with other developers and designers. I am also committed to continuous learning, with an open mind, to further enhance my proficiency in development.</span>
      </div>
      <ul className='skill-lists'>
        <li className='empty-box'></li>
        <li>
          <h3>01</h3>
          <span>WEB STANDARD</span>
          <span>일관성, 접근성, 검색엔진 최적화, 보안, 플랫폼의 다양성을 보증하기위해 HTML, SCSS를 이용하여 웹표준에 준수하는 웹페이지 개발을 지향합니다.</span>
        </li>
        <li>
          <h3>02</h3>
          <span>JavaScript</span>
          <span>프론트엔드 개발자에게 가장 기본 역량인 자바스크립트 스킬 향상을 위해, 바닐라 자바스크립트로 프로젝트를 진행하여 기본기에 충실하였습니다.</span>
        </li>
        <li>
          <h3>03</h3>
          <span>React</span>
          <span>사용자의 경험을 향상시키기 위해, 리액트 프레임워크를 이용하여 사용자의 액션, 액션 처리중, 액션 완료를 상태로 관리하여 연속적인 경험을 이끌어냈습니다.</span></li>
        <li>
          <h3>04</h3>
          <span>Git</span>
          <span>3인 이상의 개발자와 형상관리도구인 GIT을 이용하여 작업물을 공유하여 협업하여, 유지보수가 용이한 작업을 진행했습니다.</span>  
        </li>
      </ul>
    </div>
    </Tween>
  </Element>
  );
};

export default Section2;
