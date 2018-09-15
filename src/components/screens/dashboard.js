import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import { CsvToHtmlTable } from 'react-csv-to-table';
import { csvData } from './sample';

import history from '../history';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }
    render() {
        return(
                <div>
                    <Menu secondary attached="top">
                        <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} >
                            <Icon name="sidebar" /> Menu
                        </Menu.Item>          
                    </Menu>
                    <Sidebar.Pushable as={Segment} attached="bottom" >
                    <Sidebar as={Menu} animation="uncover" visible={this.state.menuVisible} icon="labeled" vertical inline inverted>
                        <Menu.Item onClick={() => history.push('/dashboard')}><Icon name="dashboard" />Dashboard</Menu.Item>
                        <Menu.Item><Icon name="info" />Instructions</Menu.Item>        
                        <Menu.Item><Icon name="unordered list" />Order Input</Menu.Item>
                        <Menu.Item><Icon name="ship" />Suppliers</Menu.Item>
                        <Menu.Item><Icon name="database" />Analytics</Menu.Item>
                        <Menu.Item onClick={() => history.push('/')}><Icon name="log out" />Log Out</Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                            <Segment basic>
                            <Header as="h3">Application Content</Header>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </Segment>
                            <CsvToHtmlTable data={csvData} csvDelimiter="," tableClassName="table table-striped table-hover"/>
                    </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
        );
    }
}

export default Dashboard;