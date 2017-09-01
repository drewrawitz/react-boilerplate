import styled from 'styled-components'
import { em } from 'polished'
import vars from '../../styles/vars'

const StyledButton = styled.button`
  display: inline-block;
	border-radius: ${em(vars.smallBorderRadius)};
	padding: ${em('10px')} ${em('20px')};
  background-color: white;
  color: ${props => props.color && vars.colors[props.color].hex ? vars.colors[props.color].hex : vars.colors[vars.primaryColor].hex};
	border: ${em('2px')} solid transparent;
  border-color: ${props => props.color && vars.colors[props.color].hex ? vars.colors[props.color].hex : vars.colors[vars.primaryColor].hex};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease-in-out;

  ${props => props.filled &&`
    background-color: ${vars.colors[props.color].hex};
    color: ${vars.colors[props.color].text};
  `}

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
  `}
`;

export {
  StyledButton
}
