import BackToTop from './BackToTop';
import SocialButton from './SocialButton';
import styled from 'styled-components';

const Footer = ({ ...props }) => {
    return (
        <StyledFooter {...props}>
            <div className="container">
                <FooterHeading>Contact Me!</FooterHeading>
                <p>The easiest way to contact me is to send me a message through <a href="">LinkedIn</a>!</p>
                <SocialButton className="linkedin-btn" color="#0A66C2" href="https://www.linkedin.com/in/elevilathompson/" target="_blank" rel="noopener">
                  <img className="social-icon" src="/icon/linkedin.svg" />
                  LinkedIn
                </SocialButton>
            </div>
            <BackToTop />
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: #ffdde2;
    font-size: 20px;
    margin-top: 60px;
    min-height: 200px;
    padding: 32px 32px 60px;
    text-align: center;

    .linkedin-btn {
        margin: 0;
        width: initial;
    }

    @media only screen and (min-width: 992px) {
        padding-bottom: 32px;
    }
`;

const FooterHeading = styled.h2`
    font-size: 35px;
    font-weight: 700;
`;

export default Footer;