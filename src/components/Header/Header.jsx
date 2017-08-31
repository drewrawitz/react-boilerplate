import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Container from '../Container/Container.jsx'

const Header = props => {
  const projectTitle = props.projectTitle ? props.projectTitle : 'hi mom';

  return (
    <header id="header" className="wrapper">
      <Container>
        <h1>{projectTitle}</h1>
        <nav id="nav">
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
};

Header.propTypes = {
  projectTitle: PropTypes.string.isRequired
};

export default Header;
