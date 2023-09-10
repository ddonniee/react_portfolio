import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
// utils
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
//components
import { Link } from 'react-router-dom';
// imgs
import Email from '../../../assets/png/email.png'
import Phone from '../../../assets/png/phone-call.png'
import Instagram from '../../../assets/png/instagram.png'
import Git from '../../../assets/png/github.png'
import Blog from '../../../assets/png/blog.png'

const Section4 = () => {
 
  const boxRef4 = useRef(null);

  const [box4VisibleHeight, setbox4VisibleHeight] = useState(0);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // 현재 스크롤 위치
    const scrollY = window.scrollY;
    // boxRef4의 위치 정보
    const box4Top = boxRef4.current.offsetTop;
    const box4Height = boxRef4.current.offsetHeight;
    // 화면 높이
    const windowHeight = window.innerHeight;
    
    // 현재 스크롤 위치가 boxRef4에 도달하면 box4VisibleHeight을 업데이트
    let containerHegiht = scrollY - box4Top + windowHeight;
    if (scrollY >= box4Top - windowHeight && scrollY <= box4Top + box4Height) {
      if(containerHegiht<500) {
        setbox4VisibleHeight(scrollY - box4Top + windowHeight);
      }else {
        setbox4VisibleHeight(1000);
      }
    } else {
      setbox4VisibleHeight(0);
    }
  }
  useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
      return ()=>{
          window.removeEventListener("scroll",handleScroll)
      }
  },[])

  const [hoverItem, setHoverItem] = useState('')

  const handleMouseOver = (e) => {
    const itemId = e.target.id;
    setHoverItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoverItem(null);
  };


  return (
    <Element name="section4" className="section" ref={boxRef4} id="section4">
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
      <div className='contact-wrapper'>
      <h1 className='section-title white'>Contacts</h1>
        <ul onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {/* <li id="list-1" className={hoverItem==="list-1"?"contact-hover":""} ><a href={process.env.REACT_APP_BLOG_URL} target="_blank"><img id="list-1" src={Phone} alt='contact-phone'/></a></li> */}
            <li id="list-2" className={hoverItem==="list-2"?"contact-hover":""} ><Link to="mailto:m__ma@naver.com" target="_blank"><img id="list-2" src={Email} alt='contact-email'/></Link></li>
            {/* <li id="list-3" className={hoverItem==="list-3"?"contact-hover":""} ><a href={process.env.REACT_APP_BLOG_URL} target="_blank"><img id="list-3" src={Instagram} alt='contact-instagram'/></a></li> */}
            <li id="list-4" className={hoverItem==="list-4"?"contact-hover":""} ><Link to={process.env.REACT_APP_GIT_URL} target="_blank"><img id="list-4" src={Git} alt='contact-git'/></Link></li>
            <li id="list-5" className={hoverItem==="list-5"?"contact-hover":""} ><Link to={process.env.REACT_APP_BLOG_URL} target="_blank"><img id="list-5" src={Blog} alt='contact-blog'/></Link></li>
        </ul>
      </div>
      </Tween>
    </Element>
  );
};

export default Section4;
