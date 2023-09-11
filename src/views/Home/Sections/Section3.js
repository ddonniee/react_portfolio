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
 
  const boxRef3 = useRef(null);

  const [box3VisibleHeight, setbox3VisibleHeight] = useState(0);
  const textRef = useRef(null);
  const textToType = `KPI-performance`;
  
  const [hover, setHover] = useState(false)

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
        <div className='detail'>
        <div className='portal-img'>
          <div className='top'>
            <ul className='top-btn'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className='top-input'>
              <Timeline target={<div ref={textRef} style={{ display: 'inline-block' }} />}>
                <Tween 
                from={{ opacity : 1 }} 
                to={{ 
                  opacity:1,
                  scrollTrigger: {
                  trigger: '.detail',
                  start: `720px`, // 요소의 상단이 화면 상단에 도달하면 시작
                  scrub: 2,
                },}}
                stagger={0.1} 
                duration={1} 
                delay={6}
                >
                  {textToType.split('').map((char, index) => (
                    <span key={index} style={{ display: 'inline-block' }}>
                      {char}
                    </span>
                  ))}
                </Tween>
              </Timeline>
            </div>
          </div>
          <div className='bottom' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img src={Cursor} />
            <Link to={process.env.REACT_APP_GIT_URL} target="_blank" className={`${hover?'hoverd-txt':''}`} >Click to see more projects</Link>
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
        <div className='detail'>
        <div className='callback-img'><img className='callback-sample' src={Two} alt="ppt-img"/></div>
        </div>
      )
    },
  ];
  
  const generatedElements = projectList.map((item, index) => (
    <div className='project-slide' key={index}>
      <Tween 
        from={{ 
          x:"-500px",
          opacity: 0 
        }} 
        to={{
          x: "0",
          opacity: 1,
          scrollTrigger: {
            trigger: '.detail',
            start: `720px`, // 요소의 상단이 화면 상단에 도달하면 시작
            scrub: 2,
          },
        }} 
        duration={1} 
        delay={2} // 인덱스를 기반으로 딜레이 조정
      >
        <div className='detail'>
          <h2>{item.title}</h2>
          <span>{item.description}</span>
          <div className='skill-list'>
            <span>Tools and languages</span>
            <ul>
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={`${skill.imgSrc == Git ? 'cursor-btn':''}`}><img src={skill.imgSrc}/></li>
              ))}
            </ul>
          </div>
        </div>
      </Tween>
      {/* 나머지 요소들도 같은 방식으로 생성 */}
      <Tween 
          from={{
            y: "-150px",
            opacity:0,
          }} 
          to={{
            y: "0px",
            opacity:1,
            scrollTrigger: {
              trigger: '.detail',
              start: '720px', // 요소의 상단이 화면 상단에 도달하면 시작
              scrub: 2,
             
            },}} 
          duration={1} 
          delay={3}
          >
            {item.elem}
          </Tween>
    </div>
  ));

  
const [selectedProject, setSelectedProject] = useState(0)

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

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
  
        gsap.to(".detail", {
          opacity: 1,
          x: 0,
          Y:0,
          scrollTrigger: {
            trigger: ".my-element",
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        });
      },
      "(max-width: 767px)": function() {
  
        gsap.to(".detail", {
          opacity: 1,
          y: 0,
          X:0,
          scrollTrigger: {
            trigger: ".my-element",
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        });
      }
    });
  
  
    window.addEventListener("resize", ScrollTrigger.update);
  return (
    <Style hover={hover}>
      <Element name="section3" className="section" ref={boxRef3} id="section3">
          <div className="project-wrapper">
          <Tween
            from={{
            opacity:0
            }}
            to={{
            opacity:1,
            scrollTrigger: {
                trigger: '.section-title',
                start: '700px', // 요소의 상단이 화면 상단에 도달하면 시작
                end: 'bottom top',   // 요소의 하단이 화면 상단에 도달하면 종료
                scrub: 0.5,
            },
            }}
        ><h1 className="section-title">Projects</h1>
        </Tween>
          {/* <Carousel pages={generatedElements} setting={bannerSettings} setRef={setRef} setIdx={setCurrentSlide}/> */}
          {
            generatedElements[selectedProject]
          }
          {/* <button onClick={()=>setSelectedProject(selectedProject===1?0:1)}>코딱지</button> */}
          {/* <div className='banner-btn'>
              <img src={Prev} alt="prev-btn" onClick={prev}/> 
              <img src={Next} alt="next-btn" onClick={next}/> 
          </div> */}
          </div>
        {/* </Tween> */}
    </Element>
    </Style>
  );
};

export default Section3;

const Style = styled.div`
  .portal-img {
    .bottom {
      img {
        width: ${props => (props.hover ? '110px' : '100px')};
      }
    }
  }
`
