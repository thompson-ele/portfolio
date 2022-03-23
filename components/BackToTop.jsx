import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BackToTop = () => {
    const [btnVisible, setBtnVisible] = useState(false);
    
    const toggleVisible = () => {
        const scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > 200) {
            setBtnVisible(true);
        } else {
            setBtnVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, []);

    return (
        <StyledButton 
            className="nav-button" 
            onClick={scrollToTop}
            style={{ display: btnVisible ? 'block' : 'none'}}
        >
            Back to Top
        </StyledButton>
    );
}

const StyledButton = styled.button`
    position: fixed;
    bottom: 8px;
    left: 50%;
    margin: 0;
    transform: translateX(-50%);

    @media only screen and (min-width: 992px) {
        bottom: 32px;
        right: 32px;
        left: initial;
    }
`;

export default BackToTop;