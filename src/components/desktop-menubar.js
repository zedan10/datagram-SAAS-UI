import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Segment, Menu, Container, Button } from 'semantic-ui-react';
import Hero from './hero';
import InnovationImg from '../assets/innovation.jpg';
import history from './history';

export default class DesktopMenubar extends Component {
    render() {
      const { children } = this.props
  
      return (
        <Responsive {...Responsive.onlyComputer}>
            <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url(${InnovationImg})`, backgroundSize: "cover", backgroundColor: 'rgba(9, 107, 194, 0.7)', backgroundBlendMode: 'multiply' }} vertical>
              <Menu style={{backgroundColor: 'rgba(172, 180, 193, 0.3)'}} inverted pointing size='large'>
                <Container>
                  <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                  <Menu.Item as='a' onClick={() => history.push('/about')}>About</Menu.Item>
                  <Menu.Item as='a'>Services</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <Hero />
            </Segment>
          {children}
        </Responsive>
      )
    }
}
  
DesktopMenubar.propTypes = {
    children: PropTypes.node,
}