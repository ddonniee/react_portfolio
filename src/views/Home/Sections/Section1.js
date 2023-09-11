import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
// utils
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
//components

// imgs
import Profile from '../../../assets/imgs/profile.jpg'

const Section1 = () => {
 
  const boxRef1 = useRef(null);

  return (
    <Element name="section1" className="section" id="section1">
    <Tween from={{ opacity: 0 }} to={{ opacity: 0.7 }} duration={2}>
      <div className='profile-wrapper' ref={boxRef1}>
        <img src={Profile} alt="profile-img"/>
        <div>
          <Tween from={{ opacity: 0 }} to={{ opacity:1 }} duration={1} delay={1}>
            <span>상상력에 편리함을 더하는</span>
          </Tween>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1}} duration={1} delay={2}>
          <span>웹을 만들다.</span>
          </Tween>
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} delay={3}>
          <span>프론트엔드 개발자, 이은정입니다.</span>
          </Tween>
        </div>
      </div>
      </Tween>
    </Element>
  );
};

export default Section1;
