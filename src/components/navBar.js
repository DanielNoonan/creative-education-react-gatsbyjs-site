import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';


// Styled Components

const NavWrapper = styled.div`
    width: 100%;
    @media (min-width: 950px) {
        position: fixed;
        top: 0;
        left: 0;
    }
`;

const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: rgba(250, 244, 241, 0.9);
`;

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    color: rgba(215, 99, 40, 1);
`;

const Logo = styled.img`
    margin-left: 10%;
    height: 120px;
    @media (mind-width: 800px) {
        margin-left: 0;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    margin-left: 20px;
    margin-bottom: 0;
    font-size: 3.5em;
`;

const Slogan = styled.p`
    font-style: italic;
    color: black;
    font-size: 2em;
`;

const LinksBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-top: 3px solid rgba(82, 147, 67, 0.8);
    height: 62px;
`;

const StyledLink = styled.p`
    flex: 0 0 calc(100% / 12 * 3);
    padding: 5px;
    font-size: 0.8em;
    font-weight: bold;
    border-bottom: 3px solid rgba(250, 244, 241, 0);
    transition: border-bottom 0.2s;
    @media (min-width: 340px) {
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 2px;
    }
    @media (min-width: 500px) {
        padding: 10px;
        font-size: 1.5em;
        letter-spacing: 2px;
    }
    @media (min-width: 600px) {
        padding: 10px;
        font-size: 2em;
        letter-spacing: 2px;
    }
`;

// NavLinkWrapper component: On hover it triggers the effect on a different component i.e. the StyledLink component.
const NavLinkWrapper = styled.div`
    &:hover ${StyledLink} {        
        border-bottom: 3px solid rgba(82, 147, 67, 0.8);
    }
`;



// React Component

const NavBar = (props) => (
    <NavWrapper className='NavWrapper'>
    <Navigation className='Navigation'>
        
        <TitleBox className='TitleBox'>
            <Logo src={require('../assets/images/logo.png')} alt='logo' />
            <TitleContainer>
            <Title>Creative Education</Title>
            <Slogan>Learn, Create and Achieve</Slogan>
            </TitleContainer>
        </TitleBox>

        <LinksBox className='LinksBox'>
        <NavLinkWrapper>
            <Link className='navLink' to='/homePage' activeStyle={{color: 'rgba(82, 147, 67, 0.8)'}}> {/*This creates a link for react router that tells it to render out this component*/}
                <StyledLink className='StyledLink'>HOME</StyledLink>
            </Link>
        </NavLinkWrapper>
        <NavLinkWrapper>
            <Link className='navLink' activeStyle={{color: 'rgba(82, 147, 67, 0.8)'}}  to='/aboutus'>
                <StyledLink className='StyledLink'>ABOUT US</StyledLink>
            </Link>
        </NavLinkWrapper>
        <NavLinkWrapper>
            <Link className='navLink' activeStyle={{color: 'rgba(82, 147, 67, 0.8)'}} to='/programmes'>
                <StyledLink className='StyledLink'>PROGRAMMES</StyledLink>
            </Link>
        </NavLinkWrapper>
        <NavLinkWrapper>
            <Link className='navLink' activeStyle={{color: 'rgba(82, 147, 67, 0.8)'}} to='/contact'>
                <StyledLink className='StyledLink'>CONTACT</StyledLink>
            </Link>
        </NavLinkWrapper>
        </LinksBox>

    </Navigation>
    </NavWrapper>

)

export default NavBar;


