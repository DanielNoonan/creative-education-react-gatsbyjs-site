import React from 'react';
import EasyTransition from 'react-easy-transition'
import styled from 'styled-components';



// Styled components

const TopContainer = styled.div`
height: 800px;
border: 1px solid black;
display: flex;
flex-wrap: wrap;
justify-content: center;
@media (min-width: 950px) {
    margin-top: 192px;
}
@media (min-width: 1161px) {
    margin-top: 130px;
}
`;

const TextContainer = styled.div`
text-align: center;
    overflow: hidden;
    margin-top: 5%;
    flex: 0 0 calc(100% / 12 * 11);
    @media (min-width: 800px) {
    flex: 0 0 calc(100% / 12 * 10);
    margin-top: 5%;
    }
    @media (min-width: 1300px) {
        flex: 0 0 calc(100% / 12 * 8);
    }
`;

const TitleBox = styled.div` {
    font-size: 1.5em;
    color: white;
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
            font-size: 2.6em;
        }
    }
`;

const TextBoxOne = styled.p`
    font-size: 1.5em;
    font-style: italic;
    color: white;
    padding: 0 10px 0 10px;
    line-height: 2em;
    margin-bottom: 5%;
    @media (min-width: 640px) {
        font-size: 2em;    
        }
        @media (min-width: 1300px) {
            font-size: 2.2em;
            margin-bottom: 10%;
        }
        @media (min-width: 1500px) {
            padding-left: 1%;
            padding-right: 1%;
            font-size: 2.6em;
            line-height: 1.1em;
        }
`;

const TextBox = styled.p`
    font-size: 1.5em;
    color: white;
    padding: 0 10px 0 10px;
    line-height: 2em;
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

const ImageContainer = styled.div`
    display: flex;

`;

const ImageBox = styled.div`
    flex: 0 0 calc(100% / 12 * 3);
`;


// React Component

const Contact = (props) => (
    <EasyTransition
        path={'/contact'}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.3s ease-in"
        finalStyle={{ opacity: 1 }}
    >

        <TopContainer className='background-image' >

            <TextContainer>
                <TitleBox>
                    <h1>Contact Us</h1>
                </TitleBox>
                <TextBoxOne>
                    Our students come from diverse social backgrounds and our inclusive approach means that all of our students benefit equally from the skills our talented and dedicated team have developed and refined over the many years we have been teaching and mentoring young people.
                </TextBoxOne>
                <TextBox>
                    We would love to hear from you:
                </TextBox>
                <TextBox>Tel: 01582 228 116</TextBox>
                <TextBox>Mobile: 07834 118 773</TextBox>
                <TextBox>School Address: Creative Education, 35 John Street, Luton, LU1 2JE</TextBox>
                <TextBox>www.creative-edu.uk info@creative-edu.uk</TextBox>
            </TextContainer>

        </TopContainer>

        <ImageContainer>
            <ImageBox>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/contact-one-largest.jpg')} alt='Teacher and two students in discussion' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/contact-one-large.jpg')} alt='Teacher and two students in discussion' />
                    <source media='(min-width: 900px)' srcSet={require('../assets/images/contact-one-medium.jpg')} alt='Teacher and two students in discussion' />
                    <source media='(min-width: 650px)' srcSet={require('../assets/images/contact-one-small.jpg')} alt='Teacher and two students in discussion' />
                    <img src={require('../assets/images/contact-one-smallest.jpg')} alt='Teacher and two students in discussion' />
                </picture>
            </ImageBox>
            <ImageBox>
            <picture>
                <source media='(min-width: 1800px)' srcSet={require('../assets/images/contact-two-largest.jpg')} alt='Student studying' />
                <source media='(min-width: 1200px)' srcSet={require('../assets/images/contact-two-large.jpg')} alt='Student studying' />
                <source media='(min-width: 900px)' srcSet={require('../assets/images/contact-two-medium.jpg')} alt='Student studying' />
                <source media='(min-width: 650px)' srcSet={require('../assets/images/contact-two-small.jpg')} alt='Student studying' />
                <img src={require('../assets/images/contact-two-smallest.jpg')} alt='Student studying' />
            </picture>
            </ImageBox>
            <ImageBox>
            <picture>
                <source media='(min-width: 1800px)' srcSet={require('../assets/images/contact-three-largest.jpg')} alt='Teacher working in the office' />
                <source media='(min-width: 1200px)' srcSet={require('../assets/images/contact-three-large.jpg')} alt='Teacher working in the office' />
                <source media='(min-width: 900px)' srcSet={require('../assets/images/contact-three-medium.jpg')} alt='Teacher working in the office' />
                <source media='(min-width: 650px)' srcSet={require('../assets/images/contact-three-small.jpg')} alt='Teacher working in the office' />
                <img src={require('../assets/images/contact-three-smallest.jpg')} alt='Teacher working in the office' />
            </picture>
            </ImageBox>
            <ImageBox>
            <picture>
                <source media='(min-width: 1800px)' srcSet={require('../assets/images/contact-four-largest.jpg')} alt='Teacher and student working together' />
                <source media='(min-width: 1200px)' srcSet={require('../assets/images/contact-four-large.jpg')} alt='Teacher and student working together' />
                <source media='(min-width: 900px)' srcSet={require('../assets/images/contact-four-medium.jpg')} alt='Teacher and student working together' />
                <source media='(min-width: 650px)' srcSet={require('../assets/images/contact-four-small.jpg')} alt='Teacher and student working together' />
                <img src={require('../assets/images/contact-four-smallest.jpg')} alt='Teacher and student working together' />
            </picture>
            </ImageBox>
        </ImageContainer>

        {props.children}
    </EasyTransition>
)

export default Contact;


