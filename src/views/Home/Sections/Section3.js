import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
// utils
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//components
import Carousel from '../../../components/Carousel';
// imgs

import Two from '../../../assets/imgs/2.jpg';

import Android from '../../../assets/png/social.png';
import Figma from '../../../assets/png/figma.png';
import Git from '../../../assets/png/git.png'
import JS from '../../../assets/png/java-script.png'
import Prev from '../../../assets/png/icon_prev.svg';
import Next from '../../../assets/png/icon_next.svg';
import Cursor from '../../../assets/png/pointer.png';
import VScode from '../../../assets/png/vscode.png';
import SCSS from '../../../assets/png/sass.png';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {

  /** Carousel로 보여주기
   * 1. 컴플라이언스 관리페이지 연결
   * 2. 콜백 프로젝트 캡쳐화면
   */
 
  const titleRef = useRef(null);

  const [box3VisibleHeight, setbox3VisibleHeight] = useState(0);

  const textRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const cursorRef = useRef(null)

  const textToType = `KPI-performance`;
  
  const [hover, setHover] = useState(false)

  const handleClickIcon = (e,skill,index) => {
    let url = (skill.imgSrc === Git && index==1) ? process.env.REACT_APP_CALLBACK_GIT_URL : (skill.imgSrc === Git && index === 0) ? process.env.REACT_APP_INTRANET_GIT_URL :'';
    if(url!=='') {
      window.location.assign(url);
    }
  }

  const projectList = [
    {
      title: "01 사내 인트라넷",
      description: "사내 KPI 관리시스템으로, API에서 받아온 KPI수치를 그리고 관리자는 점수에 따라서 인센티브를 계산 가능\n 사용자 권한에 따라 게시판 접근 권한 및 글 작성 여부 확인",
      skills: [
        { imgSrc: Git },
        { imgSrc: VScode },
        { imgSrc: SCSS },
        { imgSrc: Figma },
        { imgSrc: JS },
      ],
      elem : (
        <div className='detail' ref={rightBoxRef}>
        <div className='portal-img'>
          <div className='top'>
            <ul className='top-btn'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className='top-input'>
                  {textToType.split('').map((char, index) => (
                    <span ref={textRef} key={index} style={{ display: 'inline-block' }}>
                      {char}
                    </span>
                  ))}
            </div>
          </div>
          <div className='bottom' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img src={Cursor} ref={cursorRef}/>
            <Link to={process.env.REACT_APP_INTRANER_URL} target="_blank" className={`${hover?'hoverd-txt':''}`} >Click to portal site</Link>
          </div>
        </div>
        </div>
      ),
    },
    {
      title: "02 자동 문자 발송 어플리케이션",
      description: "안드로이드와 연동한 하이브리드앱으로,\n 전화 수/발신 종류 이후에 사용자 설정에 따라 홍보문구를 자동 발송하는 콜백시스템\n 안드로이드로만 접근가능하여 안드로이드 스튜디오로 개발 진행",
      skills: [
        { imgSrc: Git },
        { imgSrc: Android },
        { imgSrc: Figma },
        { imgSrc: JS },
      ],
      elem : (
        <div className='detail' ref={rightBoxRef}>
        <div className='callback-img'><img className='callback-sample' src={Two} alt="ppt-img"/></div>
        </div>
      )
    },
  ];
  
  const generatedElements = projectList.map((item, index) => (
    <div className='project-slide' key={index}>
        <div className='detail' ref={leftBoxRef}>
          <h2>{item.title}</h2>
          <span>{item.description}</span>
          <div className='skill-list'>
            <span>Tools and languages</span>
            <ul>
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex} onClick={(e)=>handleClickIcon(e,skill,skillIndex)} className={`${skill.imgSrc == Git ? 'cursor-btn': skill.imgSrc=== VScode ?'icon-wrapper' : ''}`}><img src={skill.imgSrc} /></li>
              ))}
            </ul>
          </div>
        </div>
            {item.elem}
    </div>
  ));

  
const [selectedProject, setSelectedProject] = useState(0)
  const bannerSettings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
};  

const handleProject = e => {
  const id = e.target.id;
  const lastIndex = id.length - 1;
  const lastCharacter = id[lastIndex]*1;
  if(lastCharacter===1 || lastCharacter===2) {
    setSelectedProject(lastCharacter-1)
  }
}

  const imgRef = useRef(null);
    
    useEffect(() => {

      // text

      let tl = gsap.timeline(); //순서대로 gsap 사용하기
      tl.from(titleRef.current, {
        duration: 0.5, //애니메이션 적용시간
        opacity:0,
      });
      tl.to(titleRef.current, {
        y: 0,
        duration:  0.5,
        opacity:1,
      });
      tl.to(titleRef.current, {
        opacity:1,
      });
    
    }, []);

    useEffect(() => {
      let tl = gsap.timeline();
      const el = cursorRef.current;
      gsap.to(el,{
        duration: 1.3,
        scale: 1.5, //1.5배 커짐
        ease: "bounce",
        repeat:-1,
        yoyo:true
      });
      // left box
      tl.from(leftBoxRef.current, {
        duration: 0.5, //애니메이션 적용시간
        opacity:0,
        x:-1500,
      });
      tl.to(leftBoxRef.current, {
        // rotation: 360, // 360도 회전
        duration: 0.5,
        opacity:1,
        x:0,
      });
      tl.to(leftBoxRef.current, {
        opacity:1,
        x:0
      });

      // right box

      tl.from(rightBoxRef.current, {
        // y: -220, //y -150인 곳에서부터 시작
        duration: 0.5, //애니메이션 적용시간
        opacity:0,
        y:1500
      });
      tl.to(rightBoxRef.current, {
        // rotation: 360, // 360도 회전
        duration: 0.5,
        opacity:1,
      });
      tl.to(rightBoxRef.current, {
        opacity:1,
        y:0
      });
    }, [selectedProject]);



  return (
    <Style hover={hover}>
      <Element name="section3" className="section" id="section3">
          <div className="project-wrapper">
        <h1 className="section-title" ref={titleRef} >Projects</h1>
          {
            generatedElements[selectedProject]
          }
          <ul className="project-list" onClick={(e)=>handleProject(e)}>
            <li id="project-1" className={`${selectedProject===0?'selected-list':''}`}></li>
            <li id="project-2" className={`${selectedProject===1?'selected-list':''}`}></li>
          </ul>
          </div>
    </Element>
    </Style>
  );
};

export default Section3;

const Style = styled.div`
  .portal-img {
    .bottom {
      img {
        width: 100px;
      }
    }
  }
`
