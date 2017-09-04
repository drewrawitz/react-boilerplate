import styled from 'styled-components'
import { em } from 'polished'

const StyledGroup = styled.div`
  display: flex;
  flex-flow: wrap;

  ${props => props.align === 'left' &&`
    justify-content: flex-start;
  `}
  ${props => props.align === 'center' &&`
    justify-content: center;
  `}
  ${props => props.align === 'right' &&`
    justify-content: flex-end;
  `}
  ${props => props.align === 'space_between' &&`
    justify-content: space-between;
  `}
  ${props => props.align === 'space_around' &&`
    justify-content: space-around;
  `}

  align-items: center;
  margin: ${props => em(-props.margin)};
  transition: all 0.3s ease-in-out;

  > * {
    margin: ${props => em(props.margin)};
  }
`;

export {
  StyledGroup
}
