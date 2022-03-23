import react from 'react';
import styled from 'styled-components';

const PillButtons = ({ list, ...props}) => {
    const colors = ['#f35c76', '#556be0', '#8857e6', '#be4896'];
    return(
        <ul className="inline-list">
            {list.map(function(name, index) {
                return <PillButton key={index} name={name} color={colors[index % colors.length]} />;
            })}
        </ul>
    );
}

const PillButton = ({ name, color, ...props}) => {
    return <StyledPillButton color={color}>{name}</StyledPillButton>
}

const StyledPillButton = styled.li`
    color: ${props => props.color};
    border: 1.75px solid ${props => props.color};
    border-radius: 5px;
    display: inline-block!important;
    font-weight: 700;
    margin-bottom: 4px;
    margin-right: 4px!important;
    padding: 1px 10px 5px;
`;

export default PillButtons;

