import React from 'react';
import styled from 'styled-components';


// Styled Components

// The box-shadow in the FooterWrapper below extends the footer to the bottom of the page. This is only really an issue when viewing the 'Contact Page' on a screen (tablet) oriented in portrait view if the device has a very long and narrow aspect ration (very much an 'edge case'). This is because the background  image used has a landscape aspect ratio so the amount it can extend verticaly is limited.
const FooterWrapper = styled.div`
    display: flex;
    bottom: 0;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100px;
    width: 100%;
    border-top: 2px solid rgba(82, 147, 67, 0.5);
    box-shadow: 0px 500px 0px 500px #FAF4F1;
`;

const FooterText = styled.div`
font-size: 1.5em;
flex: 0 0 calc(100% / 12 * 12);
text-align: center;
@media (min-width: 800px) {
    flex: 0 0 calc(100% / 12 * 4);
    }
    p {
        color: rgba(215, 99, 40, 1);        
    }
`;

const WebDeveloperInfo = styled.div`
    font-size: 1.3em;
    flex: 0 0 100%;
    text-align: center;
`;


// React Component

const Footer = (props) => (

    <FooterWrapper>
        <FooterText>
            <p>
                Creative Education, 35 John Street, Luton, LU1 2JE
            </p>
        </FooterText>
        <FooterText>
             <p>
                 Tel: 01582 228 116 / Mobile: 07834 118 773
            </p> 
        </FooterText>
        <FooterText>
            <p>  
                www.creative-edu.uk info@creative-edu.uk
            </p>
        </FooterText>
        <WebDeveloperInfo>
            <p>
                website by Daniel Noonan 07943 210 185
            </p>
        </WebDeveloperInfo>
    </FooterWrapper>

);

export default Footer;