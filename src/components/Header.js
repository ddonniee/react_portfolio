import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import styled from 'styled-components';
import gsap from 'gsap';
function Header() {

    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if(window.scrollY > 30) {
            gsap.to('.header-wrapper', {
                backgroundColor: 'white',
                duration:0.5,
              });
            setIsScroll(true)
            
        }else {
            gsap.to('.header-wrapper', {
                backgroundColor: 'transparent',
                duration:0.5,
              });
            setIsScroll(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    return (
        <Style scrolling={isScroll}>
            <div className="header-wrapper" id="header">
           <div>Portfolio</div>
           <nav>
                <ul className='section-list'>
                <li>
                    <Link to="section1" smooth={true} duration={1000}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to="section2" smooth={true} duration={1000} offset={-75}>
                    Skill
                    </Link>
                </li>
                <li>
                    <Link to="section3" smooth={true} duration={1000} offset={-75}>
                    Projects
                    </Link>
                </li>
                <li>
                    <Link to="section3" smooth={true} duration={1000} offset={-75}>
                    Contacts
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
        </Style>
    )
}

export default Header

const Style = styled.div`
    .header-wrapper {
        background-color: ${(props) => (props.scrolling ? 'white' : 'transparent')};
        z-index:1;
    }
`
