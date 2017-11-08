import React from 'react';
import EasyTransition from 'react-easy-transition'
import styled from 'styled-components';


// Styled components

const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 950px) {
        margin-top: 192px;
    }
    @media (min-width: 1161px) {
        margin-top: 130px;
    }
`;

const PageTitle = styled.h1`
    text-align: center;
    color: grey;
    font-size: 2em;
    @media (min-width: 400px) {
        font-size: 2.5em;
    }
    @media (min-width: 650px){
        letter-spacing: 0.1em;
        font-size: 3.5em;
    }
    @media (min-width: 1000px) {
        letter-spacing: 0.5em;
        font-size: 4em;
    }
`;

const ProgrammeBoxContainer = styled.div`
    flex: 0 0 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ProgrammeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    border-top: 2px solid rgba(82, 147, 67, 0.5);    
    flex: 0 0 calc(100% / 12 * 12);
    @media (min-width: 650px) {
        flex: 0 0 calc(100% / 12 * 5.95);
    }
    @media (min-width: 1200px) {
        flex: 0 0 calc(100% / 12 * 2);
    }
`;

const ProgrammeTitleSingle = styled.h1`
    color: rgba(215, 99, 40, 1);
    letter-spacing: 0.5em;
    margin-bottom: 40px;
`;
    
const ProgrammeTitleDouble = styled.h1`
    color: rgba(215, 99, 40, 1);
    letter-spacing: 0.5em;
    min-height: 50px;
`;
    
const ProgrammeTitleLargest = styled.h1`
    color: rgba(215, 99, 40, 1);
    min-height: 50px;
`;
    
const ImageBox = styled.div`
    img {
        min-width: 290px;
        border: 2px solid rgba(82, 147, 67, 0.5);
        border-radius: 4%;        
    }
`;

const ProgrammeTextBox = styled.div`
    color: rgba(82, 147, 67, 1);
    padding-left: 2%;
    padding-right: 2%;
    font-size: 1.5em;
    font-style: italic;
    @media (min-width: 640px) {
        font-size: 2em;    
    }
    @media (min-width: 800px) {

    }
    @media (min-width: 1300px) {
    }
    @media (min-width: 1500px) {
        font-size: 2.6em;
        line-height: 1.1em;
    }
`;





// React component

const Programmes = (props) => (
    <EasyTransition
        path={'pagethree'}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.3s ease-in"
        finalStyle={{ opacity: 1 }}
    >

        <PageContainer className='PageContainer'>
            <PageTitle>ADDITIONAL PROGRAMMES</PageTitle>
            <ProgrammeBoxContainer className='ProgrammeBoxContainer'>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleSingle className='ProgrammeTitleSingle'>
                            MENTORING
                        </ProgrammeTitleSingle>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/mentoring-largest.jpg')} alt='Teacher mentoring a student' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/mentoring-large.jpg')} alt='Teacher mentoring a student' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/mentoring-medium.jpg')} alt='Teacher mentoring a student' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/mentoring-small.jpg')} alt='Teacher mentoring a student' />
                            <img src={require('../assets/images/mentoring-smallest.jpg')} alt='Teacher mentoring a student' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                One-to-one and group support, enabling young people to engage with adult mentors, helping to enhance self-awareness, behaviour and positive relationships with others.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleDouble className='ProgrammeTitleDouble'>
                            CONFLICT RESOLUTION
                        </ProgrammeTitleDouble>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/conflict-largest.jpg')} alt='Picture of conflict resolution training' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/conflict-large.jpg')} alt='Picture of conflict resolution training' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/conflict-medium.jpg')} alt='Picture of conflict resolution training' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/conflict-small.jpg')} alt='Picture of conflict resolution training' />
                            <img src={require('../assets/images/conflict-smallest.jpg')} alt='Conflict resolution training' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Our sessions are aimed to persuade opposing leaders and gangs to reconcile differences, resolve conflict and avoid dispute escalation.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleDouble className='ProgrammeTitleDouble'>
                            TACKLING DISADVANTAGE
                        </ProgrammeTitleDouble>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/one-to-one-largest.jpg')} alt='Teacher using white board' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/one-to-one-large.jpg')} alt='Teacher using white board' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/one-to-one-medium.jpg')} alt='Teacher using white board' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/one-to-one-small.jpg')} alt='Teacher using white board' />
                            <img src={require('../assets/images/one-to-one-smallest.jpg')} alt='Teacher using white board' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Specific programmes involving one-to-one and small group, Maths and English tuition, raising aspirations, parental support, speech and language development.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleDouble className='ProgrammeTitleDouble'>
                            SOCIAL DEVELOPMENT
                        </ProgrammeTitleDouble>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/social-development-largest.jpg')} alt='Teacher studying with a student' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/social-development-large.jpg')} alt='Teacher studying with a student' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/social-development-medium.jpg')} alt='Teacher studying with a student' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/social-development-small.jpg')} alt='Teacher studying with a student' />
                            <img src={require('../assets/images/social-development-smallest.jpg')} alt='Teacher studying with a student' />
                        </picture>                   
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Development of young people’s physical, social and emotional well- being. Aimed at helping adolescent young people to understand and take responsibility for their actions, as well as becoming aware of their role in wider society.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
            </ProgrammeBoxContainer>
            
            <ProgrammeBoxContainer className='PageContainer'>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleLargest className='ProgrammeTitleLargest'>
                            ADOPTED AND ARMED SERVICES
                        </ProgrammeTitleLargest>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/adopted-largest.jpg')} alt='Student receiving tuition' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/adopted-large.jpg')} alt='Student receiving tuition' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/adopted-medium.jpg')} alt='Student receiving tuition' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/adopted-small.jpg')} alt='Student receiving tuition' />
                            <img src={require('../assets/images/adopted-smallest.jpg')} alt='Student receiving tuition' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Assistance in respect of emotional regulation. Successful negotiation of transition to adult life. Minimising the potential for mental health difficulties in later life.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleDouble className='ProgrammeTitleDouble'>
                            BRITISH CITIZENSHIP
                        </ProgrammeTitleDouble>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/british-citizenship-largest.jpg')} alt='Girls sitting at their desks' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/british-citizenship-large.jpg')} alt='Girls sitting at their desks' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/british-citizenship-medium.jpg')} alt='Girls sitting at their desks' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/british-citizenship-small.jpg')} alt='Girls sitting at their desks' />
                            <img src={require('../assets/images/british-citizenship-smallest.jpg')} alt='Girls sitting at their desks' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Delivery of British Values courses, workshops, lectures and seminars.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleLargest className='ProgrammeTitleLargest'>
                            CONFIDENCE, ASPIRATION, MOTIVATION
                        </ProgrammeTitleLargest>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/confidence-crop-largest.jpg')} alt='Student learning photography' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/confidence-crop-large.jpg')} alt='Student learning photography' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/confidence-crop-medium.jpg')} alt='Student learning photography' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/confidence-crop-small.jpg')} alt='Student learning photography' />
                            <img src={require('../assets/images/confidence-crop-smallest.jpg')} alt='Student learning photography' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                We encourage young people to push themselves outside their comfort zone, persist in areas where they lack strength, and develop valuable life skills.
                            </p>
                            <p>
                                We use a network of inspirational and professional individuals as a source of motivation to benefit young people.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
                <ProgrammeBox className='ProgrammeBox'>
                    <ImageBox className='ImageBox'>
                        <ProgrammeTitleDouble className='ProgrammeTitleDouble'>
                            GIFTED AND TALENTED
                        </ProgrammeTitleDouble>
                        <picture>
                            <source media='(min-width: 1800px)' srcSet={require('../assets/images/gifted-crop-largest.jpg')} alt='Student using microphone with a PC' />
                            <source media='(min-width: 1200px)' srcSet={require('../assets/images/gifted-crop-large.jpg')} alt='Student using microphone with a PC' />
                            <source media='(min-width: 900px)' srcSet={require('../assets/images/gifted-crop-medium.jpg')} alt='Student using microphone with a PC' />
                            <source media='(min-width: 650px)' srcSet={require('../assets/images/gifted-crop-small.jpg')} alt='Student using microphone with a PC' />
                            <img src={require('../assets/images/gifted-crop-smallest.jpg')} alt='Student using microphone with a PC' />
                        </picture>
                        <ProgrammeTextBox className='ProgrammeTextBox'>
                            <p>
                                Assisting gifted and talented pupils to achieve their full educational potential, ensuring career aspirations match their ability as much as possible.
                            </p>
                        </ProgrammeTextBox>
                    </ImageBox>
                </ProgrammeBox>
            </ProgrammeBoxContainer>
        </PageContainer>

        {props.children}
    </EasyTransition>
)

export default Programmes;


