import {
    MDBContainer, MDBRow, MDBCol, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBFooter,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit'
import React, { Component } from 'react';
import { COMPONENT_MAP } from './Constants.js'
import './style/customstyle.css';
import Admin from './Admin/Admin.js';


export default class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            logoWidth: '200',
            logoHeight: '200',
            justifyActive: 'HOME',
            tabs: []
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
        debugger
        this.setState({
            tabs: [{
                name: 'HOME',
                htmlPage: 'HomePage',
                display: true
            },
            {
                name: 'RESULT',
                htmlPage: 'ResultPage',
                display: true
            },
            {
                name: 'EXAM LINK',
                htmlPage: 'ExamLink',
                display: false
            },
            {
                name: 'NOTIFICATION',
                htmlPage: 'NotificationPage',
                display: false
            }]
        },()=>{
            this.handleJustifyClick("HOME")

        })
    }
    render() {
        const { logo, institutename, thumbnil } = this.props
        const ActiveComponent = COMPONENT_MAP[this.state.justifyActive.replaceAll(' ', '_')] || (() => <div>Comming soon...</div>);
        return (
            <MDBContainer fluid className='p-0'>
                {/* <header> */}
                <MDBRow className='header_style' >
                    <MDBCol md='2' className=" justify-content-center align-items-center logoDiv" >
                        <img alt='logo' src={logo} width={this.state.logoWidth} height={this.state.logoHeight}></img>
                    </MDBCol>
                    <MDBCol md='10' className='titlecentered-col'>
                        <div>
                            <h1>{institutename}</h1>
                            <h5>{thumbnil}</h5>
                        </div>
                    </MDBCol>

                </MDBRow>
                {/* </header> */}
               
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
                {/* <Admin/> */}
                <MDBFooter className='text-center text-white mt-2' style={{ backgroundColor: '#f1f1f1' }} >
                    <MDBContainer className='pt-2'>
                        <section className='mb-2'>
                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fab fa-facebook-f' />
                            </MDBBtn>

                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fa-twitter' />
                            </MDBBtn>

                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fa-google' />
                            </MDBBtn>

                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fa-instagram' />
                            </MDBBtn>

                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fa-linkedin' />
                            </MDBBtn>

                            <MDBBtn
                                rippleColor="dark"
                                color='link'
                                floating
                                size="lg"
                                className='text-dark m-1'
                                href='#!'
                                role='button'
                            >
                                <MDBIcon fab className='fa-github' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>

                    <div className='text-center text-dark p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className='text-dark' href='https://mdbootstrap.com/'>
                            MDBootstrap.com
                        </a>
                    </div>
                </MDBFooter>
            </MDBContainer>
        )
    }
}

LandingPage.defaultProps = {
    logo: 'logo',
    institutename: 'Provide institute name',
    thumbnil: 'Provide thumbnil'
}