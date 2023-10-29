import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background-color: #011526;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Logo = styled.img`
 
`;

const FooterNav = styled.nav`
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    li {
      margin-bottom: 10px;
      a {
        text-decoration: none;
        color: #fff;
        transition: color 0.3s;
        &:hover {
          color: #f9920c;
        }
      }
    }
  }
`;

const FooterSocial = styled.div`
  flex: 1;
  text-align: right;
  a {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 1.25rem;
    transition: color 0.3s;
    &:hover {
      color: #f9920c;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
        <Logo src="public/logo.png" />
        </FooterLogo>
        <FooterNav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </FooterNav>
        <FooterSocial>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </FooterSocial>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;