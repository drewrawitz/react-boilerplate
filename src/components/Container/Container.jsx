import vars from '../../styles/vars'
import styled from 'styled-components';
import { em } from 'polished'

const Container = styled.section`
  max-width: ${em(vars.container)};
  margin: auto;
  padding-left: ${em(vars.mainPadding)};
  padding-right: ${em(vars.mainPadding)};
`

export default Container;

Container.displayName = 'Container';
