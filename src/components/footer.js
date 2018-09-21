import React, { Component } from 'react';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';
import { IoLogoLinkedin } from 'react-icons/io';

class Footer extends Component {
    render() {
        return(
            <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#3f51b5' }}>
                <Container>
                    <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <div style={{textAlign: 'center'}}>
                            <a href="https://www.linkedin.com/company/datagramcanada/" style={{color: 'white'}}>
                                <IoLogoLinkedin size={32}/>
                            </a>
                        </div>
                        <Header as='h4' style={{textAlign: 'center'}} inverted>Datagram © 2018</Header>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Footer;