import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
 <FooterWrapper>
  <LinkList>

  <LinkColumn>
  <LinkTitle>
  Email
  </LinkTitle>
  <LinkItem href='mailto:babynamek@gmail.com'>babynamek@gmail.com</LinkItem>
  
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>
        Innovating one project at a time
      </Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href='https://github.com/briitn'>
<AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://linkedin.com/in/prince-gobah-0a7554223/'>
<AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https:/twitter.com/MarkupMirth'>
<AiFillTwitterCircle size='3rem'/>
    </SocialIcons>
    </SocialContainer>
  </SocialIconsContainer>
 </FooterWrapper>
  );
};

export default Footer;
