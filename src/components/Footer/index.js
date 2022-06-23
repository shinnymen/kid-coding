import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Á Propos </FooterLinkTitle>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Carrières</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contactez nous</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kid Coding
            </SocialLogo>
            <WebsiteRights>
              Kid Coding Copyright {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/profile.php?id=100082201525842" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/kid.coding/" target="_blank" arial-label="Instagram" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://mobile.twitter.com/KidCoding2" target="_blank" arial-label="Twitter" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://m.youtube.com/channel/UCRlKpkcs8HxXmgXqH6gFctw/featured" target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
