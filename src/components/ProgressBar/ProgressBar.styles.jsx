import styled from 'styled-components'
import { em } from 'polished'
import vars from '../../styles/vars'

const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.8rem;
  background-color: #d8d8d8;
	border-radius: ${em(vars.smallBorderRadius)};
`;

const Progress = styled.div`
  background-color: ${props => props.color && vars.colors[props.color].hex ? vars.colors[props.color].hex : vars.colors[vars.primaryColor].hex};
  color: rgba(255, 255, 255, 0.7);
  width: ${props => props.completed > 0 ? props.completed + '%' : 'auto'};
  height: 100%;
  padding: 5px;
  text-align: center;
	border-top-left-radius: ${em(vars.smallBorderRadius)};
	border-bottom-left-radius: ${em(vars.smallBorderRadius)};
  transition: width 0.3s ease-in-out;

  ${props => props.completed >= 100 &&`
  	border-radius: ${em(vars.smallBorderRadius)};
  `}

  ${props => props.completed === 0 &&`
    background-color: transparent;
  `}
`;

export {
  StyledProgressBar,
  Progress
}
