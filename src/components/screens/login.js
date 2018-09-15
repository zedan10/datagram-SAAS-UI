import React from 'react';
import ReactModal from 'react-modal';
import '../styles/login.css';

import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    componentWillMount() {
        window.addEventListener('showLogin', this.openModal);
        window.addEventListener('closeLogin', this.closeModal);
    }

    componentWillUnmount() {
        window.removeEventListener('showLogin', this.openModal);
        window.removeEventListener('closeLogin', this.closeModal);
    }

    openModal = () => {
        this.setState({
            isOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return(
            <ReactModal isOpen={this.state.isOpen} contentLabel="Login to Datagram Services" onRequestClose={this.closeModal} className="Modal" shouldFocusAfterRender={false}>
                <div className='login-form'>
                    <Grid textAlign='center' verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Log-in to Datagram
                            </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input onChange={this.handleUserChange} fluid icon='user' iconPosition='left' placeholder='User Name' />
                                    <Form.Input onChange={this.handlePWChange} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                                    <Button onClick={this.validateCredentials} color="linkedin" fluid size='large'>
                                    Login
                                    </Button>
                                    <p style={{fontSize: '1.33em'}}>{this.state.errorMsg}</p>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </div>
            </ReactModal>
        );
    }
}
