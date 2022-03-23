import styled from 'styled-components';
import { em } from '../helpers/font-helpers';

const MainHeading = ({ children, ...props}) => {
    return <StyledH1 {...props}>{children}</StyledH1>;
}

const SubHeading = ({ children, ...props}) => {
    return <StyledH2 {...props}>{children}</StyledH2>;
}

const StyledH1 = styled.h1`
    font-weight: 900;
    font-size: ${em(80)};
    color: #5D75F5;
    line-height: 80px;
    margin: 0 0 16px;
    text-align: center;
    text-shadow: 4px 4px #f55d75;

    @media only screen and (min-width: 992px) {
        font-size: ${em(80)};
    }
`;

const StyledH2 = styled.h2`
    font-weight: 900;
    border-left: 8px solid #f35c76;
    margin-bottom: 16px;
    margin-top: 60px;
    padding: 0 16px;
    font-size: 35px;
`;

export {
    MainHeading,
    SubHeading
}