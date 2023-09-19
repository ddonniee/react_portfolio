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
import Test from '../../../assets/imgs/test-img.jpg'

import Android from '../../../assets/png/social.png';
import Figma from '../../../assets/png/figma.png';
import Git from '../../../assets/png/git.png'
import JS from '../../../assets/png/java-script.png'
import Cursor from '../../../assets/png/pointer.png';
import VScode from '../../../assets/png/vscode.png';
import SCSS from '../../../assets/png/sass.png';
import TS from '../../../assets/png/typescript.png';
import Redux from '../../../assets/png/Redux.png';

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
      title: "01 관리자페이지",
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
    {
      title: "03 도파민 중독테스트",
      description: "타입스크립트, 리덕스, gsap 라이브러리를 이용한 개인 토이프로젝트\n 카카오톡 공유하기(로컬환경)를 통해 지인들과 테스트 결과를 공유할 수 있다. ",
      skills: [
        { imgSrc: Git },
        { imgSrc: VScode },
        { imgSrc: SCSS },
        { imgSrc: Redux },
        { imgSrc: TS },
      ],
      elem : (
        <div className='detail' ref={rightBoxRef}>
        <Link to={process.env.REACT_APP_QUIZ_URL} target="_blank" className='callback-img'><img className='callback-sample' src={Test} alt="ppt-img"/></Link>
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

const handleProject = (e,idx) => {
    setSelectedProject(idx)
}

  const imgRef = useRef(null);
    
    useEffect(() => {

      // text

      let tl = gsap.timeline(); //순서대로 gsap 사용하기
      tl.from(titleRef.current, {
        duration: 0.5, //애니메이션 적용시간
        opacity:0,
        delay:3
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
      const cursorAnimation = gsap.to(cursorRef.current, {
        duration: 1.3,
        scale: 1.5,
        ease: "bounce",
        repeat: -1,
        yoyo: true
      });
    
      // leftBoxRef.current 애니메이션
      const leftBoxAnimation = gsap.timeline()
        .from(leftBoxRef.current, {
          duration: 0.5,
          opacity: 0,
          x: -200,
         
        })
        .to(leftBoxRef.current, {
          duration: 0.5,
          opacity: 1,
          x: 0,
        });
    
      // rightBoxRef.current 애니메이션
      const rightBoxAnimation = gsap.timeline()
        .from(rightBoxRef.current, {
          duration: 0.5,
          opacity: 0,
          delay:1,
          y: 50,
        })
        .to(rightBoxRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 0,
        });
      return () => {
        // 컴포넌트가 unmount될 때 애니메이션을 제거
        cursorAnimation.kill();
        leftBoxAnimation.kill();
        rightBoxAnimation.kill();
      };
    }, [cursorRef, leftBoxRef, rightBoxRef, selectedProject]);;



  return (
    <Style hover={hover}>
      <Element name="section3" className="section" id="section3">
          <div className="project-wrapper">
        <h1 className="section-title" ref={titleRef} >Projects</h1>
          {
            generatedElements[selectedProject]
          }
          <ul className="project-list">
            {
              projectList?.map((pro,proIdx)=>{
                return(
                  <li  onClick={(e)=>handleProject(e,proIdx)} id={`project-${proIdx+1}`} className={`${selectedProject===proIdx?'selected-list':''}`}></li>
                )
              })
            }
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
