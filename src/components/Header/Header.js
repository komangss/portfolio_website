import Link from 'next/link'; // allow us to link to different pages or sections in our own page
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; // icon from react icons
import { DiCssdeck } from 'react-icons/di'; // icon from react icons

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; // 

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portofolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink> 
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink> 
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink> 
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
