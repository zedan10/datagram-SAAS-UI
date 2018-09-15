import React from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import ResponsiveContainer from '../responsive-container';
import '../styles/home.css';

const Home = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Header as='h3' style={{ fontSize: '2em' }}>Take Your Work to New Heights</Header>
                    <p style={{ fontSize: '1.33em' }}>
                    You’ve designed your study, spent hours reviewing peer articles and months collecting all of your data but get to a point of loss on your next steps.
                    <br/><br/> This is where Datagram comes in. At Datagram, we help you answer the important questions that not only strengthen your work but save you countless hours (~100) spent learning statistical modelling, familiarizing with software tools (SPSS, R etc.) and interpreting results.
                    <br/><br/> Our services can help you solve the questions needed for your research.
                    </p>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button className="signUpButton" size='huge' color="linkedin">Sign Up</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Row>
            </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default Home;