import React, { Component } from 'react'
import {
    MDBRow, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit'
import '../style/customstyle.css';
import {COMPONENT_MAP_ADMIN} from '../Constants.js';


export default class Admin extends Component {

    constructor() {
        super();
        this.state = {
            tabs: [],
            justifyActive: 'SITE SETTING'
        }
    }

    handleJustifyClick = (value) => {
        if (value === this.state.justifyActive) {
            return;
        }

        this.setState({
            justifyActive: value
        })
    }

    componentDidMount() {
        this.setState({
            tabs: [{
                name: 'SITE SETTING',
                htmlPage: 'SiteSettingPage',
                display: true
            },
            {
                name: 'ADD NOTIFICATION',
                htmlPage: 'AddNotificationPage',
                display: true
            },
            {
                name: 'ADD RESULT',
                htmlPage: 'AddResultPage',
                display: true
            },
            {
                name: 'ADD NEWS',
                htmlPage: 'AddNewsPage',
                display: true
            }]
        })
    }

    render() {
        const ActiveComponent = COMPONENT_MAP_ADMIN[this.state.justifyActive.replaceAll(' ', '_')] || (() => <div>Comming soon...</div>);
        return (
            <MDBRow>
                <MDBTabs pills justify className='mb-3'>
                    {this.state.tabs.map((e, index) => {
                        return (<MDBTabsItem key={e.name}>
                            <MDBTabsLink onClick={() => this.handleJustifyClick(e.name)} active={this.state.justifyActive === e.name}>
                                {e.name}
                            </MDBTabsLink>
                        </MDBTabsItem>)
                    })}
                </MDBTabs>

                <MDBTabsContent>
                    {this.state.tabs.map((e, index) => {
                        return (<MDBTabsPane key={index} open={this.state.justifyActive === e.name}>{e.display ?
                            <ActiveComponent />
                            : e.name + '  content Comming soon...'}</MDBTabsPane>
                        )
                    })}

                </MDBTabsContent>
            </MDBRow>
        )
    }
}
