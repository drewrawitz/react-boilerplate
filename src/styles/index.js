import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { em } from 'polished'
import vars from './vars';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    width: ${em(vars.container)}
  }
`
