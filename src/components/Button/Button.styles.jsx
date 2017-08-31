import styled from 'styled-components'
import { em } from 'polished'
import vars from '../../styles/vars'

const StyledButton = styled.button`
  display: inline-block;
  font-size: 1em;
	border-radius: ${em(vars.smallBorderRadius)};
	padding: ${em('10px')} ${em('20px')};
	margin: 0.5rem 1rem;
  background: white;
	color: ${vars.colors.pink};
	border: 2px solid ${vars.colors.pink};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  ${props => props.disabled &&`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export {
  StyledButton
}
