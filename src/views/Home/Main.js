import React, { useEffect, useRef, useState } from 'react';
import { Link, Element } from 'react-scroll';
// utils
import styled from 'styled-components';
import gsap from 'gsap';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
//components
// imgs
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Test from './Sections/Test';

const Main = () => {

  return (
      <div>
         <Header />
            <div className='content'>
             <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            {/* <Test /> */}
            </div>
          <Footer />
    </div>
  );
};

export default Main;
