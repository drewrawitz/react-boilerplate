import styled from 'styled-components'
import { em } from 'polished'
import vars from '../../styles/vars'

const StyledButton = styled.button`
  display: inline-block;
	border-radius: ${em(vars.smallBorderRadius)};
	padding: ${em('10px')} ${em('20px')};
	margin: 0.5rem 1rem;
  background: white;
  color: ${props => props.color && vars.colors[props.color] ? vars.colors[props.color] : vars.colors.pink};
	border: ${em('2px')} solid ${vars.colors.pink};
  border-color: ${props => props.color && vars.colors[props.color] ? vars.colors[props.color] : vars.colors.pink};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  ${props => props.size === 'small' &&`
    font-size: 0.8em;
  `}

  ${props => props.size === 'medium' &&`
    font-size: 1em;
  `}

  ${props => props.size === 'large' &&`
    font-size: 1.2em;
  `}

  ${props => props.disabled &&`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${props => props.full &&`
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  `}
`;

export {
  StyledButton
}
