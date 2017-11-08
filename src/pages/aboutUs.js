import React from 'react';
import EasyTransition from 'react-easy-transition'
import styled from 'styled-components';



// Styled Components

const PageWrapper = styled.div`
    width: 100%;
`;

const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
`;

const ImageBox = styled.div`
    flex: 0 0 100%;
    @media (min-width: 950px) {
        margin-top: 192px;
    }
    @media (min-width: 1161px) {
        margin-top: 130px;
    }
`;

const MainTextTitle = styled.h1`
    color: rgba(215, 99, 40, 1);
    margin-bottom: 0;
    @media (min-width: 640px) {
        font-size: 3em;
        letter-spacing: 0.4em
    }
    @media (min-width: 800px) {
        font-size: 3em;
    }
    @media (min-width: 950px) {
        letter-spacing: 1em;
    }
    @media (min-width: 1500px) {
        font-size: 4em;
    }
    `;

const MainTextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


const TextBoxOne = styled.div`
    flex: 0 0 100%;
    font-size: 1.5em;
    @media (min-width: 640px) {
        font-size: 2em;
    }
    @media (min-width: 1200px) {
        flex: 0 0 calc(100% / 12 * 6);
        padding-right: 2%;
    }
    @media (min-width: 1300px) {
        font-size: 2.2em;
    }
    @media (min-width: 1500px) {
        font-size: 2.6em;
    }
    `;
    
    const ListBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 100%;
    @media (min-width: 1200px) {
        flex: 0 0 calc(100% / 12 * 6);
        padding-left: 2%;
    }
    @media (min-width: 1500px) {
        flex: 0 0 calc(100% / 12 * 6);
    }
`;

const TextBoxTwo = styled.div`
    flex: 0 0 100%;
    font-size: 1.5em;
    @media (min-width: 640px) {
        font-size: 2em;
    }
    @media (min-width: 1300px) {
        font-size: 2.2em;
    }
    @media (min-width: 1500px) {
        font-size: 2.6em;    
    }
`;

const ListItemsBox = styled.div`
    flex: 0 0 100%;
    font-size: 1.5em;
    @media (min-width: 640px) {
        font-size: 2em;
    }
    @media (min-width: 800px) {
        flex: 0 0 calc(100% / 12 * 6);
    }
    @media (min-width: 1300px) {
        font-size: 2.2em;
    }
    @media (min-width: 1500px) {
        font-size: 2.6em;   
    } 
`;


// React Component

const AboutUs = (props) => (
    <EasyTransition
        path={'/aboutus'}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.5s ease-in"
        finalStyle={{ opacity: 1 }}
    >
        <PageWrapper className='PageWrapper'>
            <ImageBox className='ImageBox'>
                <picture>
                    <source media='(min-width: 1800px)' srcSet={require('../assets/images/class2-boys-largest.jpg')} alt='Students standing in front of the main window under the school logo' />
                    <source media='(min-width: 1200px)' srcSet={require('../assets/images/class2-boys-large.jpg')} alt='Students standing in front of the main window under the school logo' />
                    <source media='(min-width: 900px)' srcSet={require('../assets/images/class2-boys-medium.jpg')} alt='Students standing in front of the main window under the school logo' />
                    <source media='(min-width: 600px)' srcSet={require('../assets/images/class2-boys-small.jpg')} alt='Students standing in front of the main window under the school logo' />
                    <img src={require('../assets/images/class2-boys-smallest.jpg')} alt='Students working at their desks' />
                </picture>
            </ImageBox>
            <PageContainer className='PageContainer'>
                <MainTextTitle className='MainTextTitle'>
                    CHANGING LIVES
                </MainTextTitle>
                <MainTextContainer className='MainTextContainer'>
                    <TextBoxOne className='TextBoxOne'>
                        <p>
                        At Creative Education our mission is to deliver high quality education and to provide an inclusive and personalised learning environment for all our pupils.
                        </p>
                        <p>
                            We provide a wide range of educational and vocational learning opportunities for young people. Pupils will progress towards gaining GCSE’s in English, Maths, Science, Geography, Religious Studies, Business Studies and ICT, including programmes of functional skill development.
                        </p>
                        <p>
                            Students will also benefit from interactive learning opportunities in Graphic Design, Digital Art, Photography, Video Editing, Website Design and Computer Programming. Learning takes place through a range of projects, mentored sessions and formal teaching.
                        </p>
                    </TextBoxOne>
                    <ListBoxContainer className='ListBoxContainer'>
                        <TextBoxTwo className='TextboxTwo'>
                            <p>
                                We believe that by connecting with students we can allow them to engage in developing their ability to learn and apply knowledge to enhance their potential to:
                            </p>
                        </TextBoxTwo>
                        <ListItemsBox className='ListItemsBox'>
                            <ul>
                                <li>
                                    become positive role models
                                </li>
                                <li>
                                    have ambition and aspiration
                                </li>
                                <li>
                                    be proud of themselves
                                </li>
                                <li>
                                    develop lifelong learning skills
                                </li>
                                <li>
                                    be able to identify risks
                                </li>
                                <li>
                                    make positive choices and to be safe
                                </li>
                            </ul>
                        </ListItemsBox>
                        <ListItemsBox className='ListItemsBox'>
                            <ul>
                                <li>
                                    be well physically and emotionally
                                </li>
                                <li>
                                    recognise their potential, strengths and weaknesses
                                </li>
                                <li>
                                    be confident
                                </li>
                                <li>
                                    be able to ask questions
                                </li>
                                <li>
                                    plan for the future
                                </li>
                            </ul>
                        </ListItemsBox>
                    </ListBoxContainer>
                </MainTextContainer>
            </PageContainer>
        </PageWrapper>

        {props.children}
    </EasyTransition>
)

export default AboutUs;


