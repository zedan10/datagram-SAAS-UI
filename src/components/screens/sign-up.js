import React from 'react';
import { Segment, Grid, Header, Button, Responsive, Menu, Container } from 'semantic-ui-react';
import history from '../history';

const SignUp = () => {
    <Responsive {...Responsive.onlyComputer}>
        <Menu size='large'>
            <Container>
                <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/about')}>About</Menu.Item>
                <Menu.Item as='a'>Services</Menu.Item>
                <Menu.Item position='right'>
                <Button as='a' onClick={() => history.push('/dashboard')} inverted>Log in</Button>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
            </Container>
        </Menu>
    </Responsive>    
}

export default SignUp;