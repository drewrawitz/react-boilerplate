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
  text-align: center;
	border-top-left-radius: ${em(vars.smallBorderRadius)};
	border-bottom-left-radius: ${em(vars.smallBorderRadius)};
  padding: ${em('5px')};
  transition: width 0.3s linear 0ms;

  ${props => !props.showText &&`
    height: ${em('4px')};
    padding: 0;
  `}

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
