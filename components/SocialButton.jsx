import styled from 'styled-components';

const SocialButton = ({ color, children, ...props}) => {
    return <StyledSocialButton color={color} {...props}>{children}</StyledSocialButton>
}

const StyledSocialButton = styled.a`
    background-color: #fff;
    border: 2px solid ${props => props.color};
    border-radius: 5px;
    color: ${props => props.color};
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    margin-right: 16px;
    padding: 6px 15px 10px;
    text-align: center;
    transition: 0.25s;
    width: 100%;

    &:hover,
    &:focus,
    &:active {
        background-color: ${props => props.color};
        color: #fff;

        img {
            filter:  brightness(0) invert(1);
        }
    }

    @media only screen and (min-width: 992px) {
        margin-bottom: 16px;

        &:hover,
        &:focus,
        &:active {
            box-shadow: inset 9.5em 0 0 0 ${props => props.color};
        }
    }
`;

export default SocialButton;