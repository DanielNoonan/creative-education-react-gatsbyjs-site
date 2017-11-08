import React from 'react';
import EasyTransition from 'react-easy-transition'
import styled from 'styled-components';



// Styled Components

const HeroImage = styled.img`
    width: 100%;
    border-radius: 0;
    @media (min-width: 950px) {
        margin-top: 192px;
    }
    @media (min-width: 1161px) {
        margin-top: 130px;
    }
`;

const SectionOne = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SectionOneImageColumn = styled.div`
    display: none;
    margin-top: 25px;
    margin-left: 4px;
    flex: 0 0 calc(100% / 12 * 1.9);
    @media (min-width: 1300px) {
        display: block;
    }
    img {
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;
    }
`;

const ImageRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (min-width: 1300px) {
        display: none;
    }
`;

const SectionOneImageRowImageBox = styled.div`
    flex: 0 0 calc(100% / 12 * 5.95);
    img {
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;
    }
    @media (min-width: 800px) {
        flex: 0 0 calc(100% / 12 * 2);
    }
`;

const SectionOneTitle = styled.h1`
    text-align: center;
    color: rgba(215, 99, 40, 1);
`;

const SectionOneText = styled.div`
    flex: 0 0 calc(100% / 12 * 11);
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    @media (min-width: 640px) {
    font-size: 2em;    
    }
    @media (min-width: 800px) {
        flex: 0 0 calc(100% / 12 * 10);
    }
    @media (min-width: 1300px) {
        flex: 0 0 calc(100% / 12 * 8);
        font-size: 2.2em;
    }
    @media (min-width: 1500px) {
        padding-left: 1%;
        padding-right: 1%;
        font-size: 2.6em;
        line-height: 1.1em;
    }
`;

const SectionTwo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SectionTwoText = styled.div`
    flex: 0 0 calc(100% / 12 * 11);
    padding-left: 2%;
    padding-right: 2%;
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    @media (min-width: 640px) {
        font-size: 2em;    
    }
    @media (min-width: 800px) {
        flex: 0 0 calc(100% / 12 * 8);
    }
    @media (min-width: 1300px) {
        margin-top: 2%;
    }
    @media (min-width: 1500px) {
        margin-top: 3%;
        font-size: 2.6em;
        line-height: 1.1em;
    }
`;

const SectionTwoImageColumnOne = styled.div`
    margin-left: 20%;
    flex: 0 0 calc(100% / 12 * 1.95);
    img {
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;
    
    }
    @media (min-width: 800px) {
        margin-left: 0;
    }
`;
const SectionTwoImageColumnTwo = styled.div`
    margin-right: 20%;
    flex: 0 0 calc(100% / 12 * 1.95);
    img {
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;        
    }
    @media (min-width: 800px) {
        display: none;
    }
    @media (min-width: 1300px) {
        margin: 0;
        display: block;
    }
`;

const SectionTwoImageColumnThree = styled.div`
    flex: 0 0 calc(100% / 12 * 1.95);
    display: none;
    img {
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;        
    }
    @media (min-width: 800px) {
        display: block;
    }
    @media (min-width: 1300px) {
        display: none;
    }
`;



// React Component

const HomePage = (props) => (
    <EasyTransition
        path={'/'}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.5s ease-in"
        finalStyle={{ opacity: 1 }}
    >   <picture>
            <source media='(min-width: 1800px)' srcSet={require('../assets/images/hero-largest.jpg')} alt='Students standing in front of the main window under the school logo' />
            <source media='(min-width: 1200px)' srcSet={require('../assets/images/hero-large.jpg')} alt='Students standing in front of the main window under the school logo' />
            <source media='(min-width: 900px)' srcSet={require('../assets/images/hero-medium.jpg')} alt='Students standing in front of the main window under the school logo' />
            <source media='(min-width: 600px)' srcSet={require('../assets/images/hero-small.jpg')} alt='Students standing in front of the main window under the school logo' />
            <HeroImage className='HeroImage' src={require("../assets/images/hero-smallest.jpg")} alt='Students standing in front of the main window under the school logo' />
        </picture>
        <SectionOne className='SectionOne'>
            <SectionOneImageColumn className='SectionOneImageColumn'>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/desks-largest.jpg')} alt='The classroom' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/desks-large.jpg')} alt='The classroom' />
                    <img src={require('../assets/images/desks-smallest.jpg')} alt='The classroom' />
                </picture>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/glass-office-crop-largest.jpg')} alt='The glass walled office' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/glass-office-crop-large.jpg')} alt='The glass walled office' />
                    <img src={require('../assets/images/glass-office-crop-smallest.jpg')} alt='The glass walled office' />
                </picture>
            </SectionOneImageColumn>
            <SectionOneImageColumn className='SectionOneImageColumn'>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/playing-pool-largest.jpg')} alt='Students playing a game on the pool table' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/playing-pool-large.jpg')} alt='Students playing a game on the pool table' />
                    <img src={require('../assets/images/playing-pool-smallest.jpg')} alt='Students playing a game on the pool table' />
                </picture>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/ps4-crop-largest.jpg')} alt='Students playing with the Playstation' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/ps4-crop-large.jpg')} alt='Students playing with the Playstation' />
                    <img src={require('../assets/images/ps4-crop-smallest.jpg')} alt='Students playing with the Playstation' />
                </picture>
            </SectionOneImageColumn>
            <SectionOneText className='SectionOneText'>
                <SectionOneTitle className='SectionOneTitle'>Welcome</SectionOneTitle>
                <p>
                    Creative Education specialises in mentoring pupils needing emotional or educational counselling and support.
                </p>
                <p>
                    We have a proven track record in improving pupil attainment, often achieving dramatic increases in performance.
                </p>
                <p>
                    In recognising the vital importance of engaging with pupils, our lessons capture and stimulate student interest, therefore leading to more engagement.
                    This level of interaction allows us to focus on pupil strengths and weaknesses, and to identify any issues that may be present. Students are treated as individuals and subjects are tailored to them.
                </p>
                <p>
                    Our small class sizes ensure that students receive excellent personalised attention at all times.
                </p>
            </SectionOneText>
            <ImageRow className='ImageRow'>
                <SectionOneImageRowImageBox className='SectionOneImageRowImageBox'>
                <picture>
                    <source media='(min-width: 700px)' srcSet={require('../assets/images/desks-special.jpg')} alt='The classroom' />
                    <img src={require('../assets/images/desks-largest.jpg')} alt='The classroom' />
                </picture>
                </SectionOneImageRowImageBox>
                <SectionOneImageRowImageBox className='SectionOneImageRowImageBox'>
                <picture>
                    <source media='(min-width: 700px)' srcSet={require('../assets/images/glass-office-crop-special.jpg')} alt='The glass walled office' />
                    <img src={require('../assets/images/glass-office-crop-largest.jpg')} alt='The glass walled office' />
                </picture>
                </SectionOneImageRowImageBox>
                <SectionOneImageRowImageBox className='SectionOneImageRowImageBox'>
                    <picture>
                        <source media='(min-width: 700px)' srcSet={require('../assets/images/ps4-crop-special.jpg')} alt='Students playing with the Playstation' />
                        <img src={require('../assets/images/ps4-crop-largest.jpg')} alt='Students playing with the Playstation' />
                    </picture>
                </SectionOneImageRowImageBox>
                <SectionOneImageRowImageBox className='SectionOneImageRowImageBox'>
                    <picture>
                        <source media='(min-width: 700px)' srcSet={require('../assets/images/playing-pool-special.jpg')} alt='Students playing a game on the pool table' />
                        <img src={require('../assets/images/playing-pool-largest.jpg')} alt='Students playing a game on the pool table' />
                    </picture>
                </SectionOneImageRowImageBox>
            </ImageRow>
        </SectionOne>

        <SectionTwo className='SectionTwo'>
            <SectionTwoImageColumnThree className='SectionTwoImageColumnThree'>
                <img src={require('../assets/images/kam-board-medium.jpg')} alt='Teaching design principles in the classroom' />
            </SectionTwoImageColumnThree>
            <SectionTwoText className='SectionTwoText'>
                <SectionOneTitle className='SectionOneTitle'>Facilities</SectionOneTitle>
                <p>
                    We are situated in the heart of Luton, just behind the Mall and easily accessible. The environment is modern and includes facilities designed to assist with pupil engagement.
                </p>
                <p> 
                    We have a gaming suite, table tennis and pool table alongside graphic design and photography equipment to nurture a creative mind.
                </p>
            </SectionTwoText>
            <SectionTwoImageColumnOne className='SectionTwoImageColumnOne'>
                {/* <img src={require('../assets/images/confidence-large.jpg')} alt='Student using photographic equipment' /> */}
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/confidence-largest.jpg')} alt='Student using photographic equipment' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/confidence-large.jpg')} alt='Student using photographic equipment' />
                    <source media='(min-width: 900px)' srcSet={require('../assets/images/confidence-medium.jpg')} alt='Student using photographic equipment' />
                    <source media='(min-width: 600px)' srcSet={require('../assets/images/confidence-small.jpg')} alt='Student using photographic equipment' />
                    <img src={require('../assets/images/confidence-smallest.jpg')} alt='Student using photographic equipment' />
                </picture>
            </SectionTwoImageColumnOne>
            <SectionTwoImageColumnTwo className='SectionTwoImageColumnTwo'>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/kam-board-largest.jpg')} alt='Teaching design principles in the classroom' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/kam-board-large.jpg')} alt='Teaching design principles in the classroom' />
                    <source media='(min-width: 600px)' srcSet={require('../assets/images/kam-board-small.jpg')} alt='Teaching design principles in the classroom' />
                    <img src={require('../assets/images/kam-board-smallest.jpg')} alt='Teaching design principles in the classroom' />
                </picture>
            </SectionTwoImageColumnTwo>
        </SectionTwo>

        {props.children}
    </EasyTransition>
)

export default HomePage;