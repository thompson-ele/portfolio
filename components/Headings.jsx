import react from 'react';
import styled from 'styled-components';

const MainHeading = ({ children, ...props}) => {
    return <StyledH1>{children}</StyledH1>;
}

const SubHeading = ({ children, ...props}) => {
    return <StyledH2>{children}</StyledH2>;
}

const StyledH1 = styled.h1`
    font-family: 'Roboto Serif', serif;
    font-size: 100px;
    color: #5D75F5;
    margin-bottom: 32px;
    text-align: center;
    text-shadow: 4px 4px #f55d75;
`;

const StyledH2 = styled.h2`
    font-family: 'Roboto Serif', serif;
    border-left: 8px solid #60c4f6;
    padding: 16px;
    font-size: 35px;
`;

export {
    MainHeading,
    SubHeading
}