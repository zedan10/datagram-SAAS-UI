import React from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import ResponsiveContainer from '../responsive-container';

const About = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Header as='h3' style={{ fontSize: '2em' }}>About Us</Header>
                <p style={{ fontSize: '1.33em' }}>
                The first thing my clients and friends notice about me is smile tht I always wear. Mortgage Shopping can be frustating and stressful experience, but with knowledge and the friendly approach that I bring into the process is becomes something to look forward to.
                <br/><br/> With a degree in business and a 15 years experience in home financeing, I offer my clients a professional and valuable mortgage advice, coupled with excellent customer service skills and a friendly attitude.
                <br/><br/> Clients are my number one priority and I always strive to give them the best possible service. With the great variety of mortgage products available through Mortgage Intelligence, I work together with my client to find the mortgage plan that will be suit their needs and financial situation.
                <br/><br/> When I am not working, I enjoy spending time with my wife and three children. Together, we love playing Cricket, Soccer and Basketball.
                <br/><br/> Multilingual Talent: English, Urdu, Hindi and Punjabi
                </p>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button className="applyButton" size='huge'>Apply Online</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
        </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default About;