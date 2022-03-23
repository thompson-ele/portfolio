import styled from 'styled-components';

const Window = ({ children, heading = "❤️✨", ...props}) => {
    return (
        <StyledWindow {...props}>
            <WindowHead>
                {heading} 
                <WindowX />
            </WindowHead>
            <WindowBody>{children}</WindowBody>
        </StyledWindow>
    );
}

const StyledWindow = styled.div`
    background-color: #fff;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #ffdde2;
    margin-bottom: 16px;
    padding: 3px;

    @media only screen and (min-width: 992px) {
        font-size: 20px;
    }
`;

const WindowHead = styled.div`
    background-color: #4f64d5;
    color: #fff;
    font-weight: 700;
    padding: 8px 16px;
    position: relative;
`;

const WindowBody = styled.div`
    padding: 16px;
`;

const WindowX = styled.span`
    position: absolute;
    right: 12px;
    width: 24px;
    height: 24px;
    &:before, &:after {
        position: absolute;
        left: 12px;
        content: ' ';
        height: 24px;
        width: 3px;
        background-color: #fff;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export default Window;