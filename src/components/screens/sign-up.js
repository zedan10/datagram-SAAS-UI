import React from 'react';
import { Form, Checkbox, Segment, Header, Grid, Button, Menu, Container } from 'semantic-ui-react';
import PhotoCarousel from './photo-carousel';
import history from '../history';

const image_list = ['https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/970198/pexels-photo-970198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']
class SignUp extends React.Component {
    showLoginModal = () => {
        window.dispatchEvent(new CustomEvent('showLogin', {}));
    }

    render() {
        return(
            <div>
                <Menu size='large'>
                    <Container>
                        <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                        <Menu.Item as='a' onClick={() => history.push('/about')}>About</Menu.Item>
                        <Menu.Item as='a'>Services</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' onClick={this.showLoginModal}>Log in</Button>
                        <Button as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                        </Menu.Item>
                    </Container>
                </Menu>
                <Segment style={{ padding: '2em 0em' }}>
                    <Grid container verticalAlign='middle'>
                        <Header as='h3' style={{ fontSize: '2em' }}>Sign up to access all of Datagram's services</Header>
                        <Grid.Row>
                                <Form>
                                    <Form.Field>
                                        <label>Business Email</label>
                                        <input placeholder='Business email' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input placeholder='Secure password' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Business Name</label>
                                        <input placeholder='Business name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Contact Number</label>
                                        <input placeholder='Primary contact number' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox label='I agree to the Terms and Conditions' />
                                    </Form.Field>
                                    <Button type='submit'>Submit</Button>
                                </Form>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <PhotoCarousel photo_list={image_list}/>
            </div> 
        );
    }
          
}

export default SignUp;