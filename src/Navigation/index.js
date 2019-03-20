import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { 
  home, 
  BRAND_NAME_ABBRV,
  SOUND_CLOUD_LINK
} from '../Constants';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href={home.path}>{BRAND_NAME_ABBRV}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={home.path}>{home.name}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href={SOUND_CLOUD_LINK}>SoundCloud</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.patreon.com/declinetocomment">Patreon</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const UlS = styled.ul`
  list-style: none;
`
