import { MDBInputGroup, MDBFile, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBBtnGroup } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import '../style/customstyle.css';
export default class AddNews extends Component {
    constructor() {
        super();
        this.state = {
            logo: null,
            title: "",
            tagLine: "",
            NoOfTabs: '1',
            logoURL:'',
            fileInputKey: Date.now()
        }
    }

    handleLogo = (e) => {
        const file = e.target.files[0];
        this.setState({
            logo: file,
        });
    }
    handleTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }
    handleTagline = (e) => {
        this.setState({
            tagLine: e.target.value,
        });
    }
    handleNoOfTabs = (e) => {
        this.setState({
            NoOfTabs: e.target.value,
        });
    }

    previewLogo = () => {
        this.setState({
            logoURL: this.state.logo?URL.createObjectURL(this.state.logo):'' // Create a URL for the selected file
        })
    }
    handleClearAll = () => {
        this.setState({
            logo: null,
            title: "",
            tagLine: "",
            NoOfTabs: '1',
            logoURL: '',
            fileInputKey: Date.now()
        })
    }

    handleSave = () => {
        console.log('save btn clicked');

    }

  render() {
    return (
        <MDBContainer>
        <MDBRow style={{height:'20.3rem'}}>
            <MDBCol md='6' className='mt-3'>

                <MDBRow>
                    {/* <MDBCol> */}
                    <MDBInputGroup textBefore='Update Logo @ ' className='mb-3'>
                        <MDBFile id='customFile' onChange={this.handleLogo} key={this.state.fileInputKey} />
                    </MDBInputGroup>
                </MDBRow>
                <MDBRow>
                    <MDBInputGroup textBefore='Title @ ' className='mb-3'>
                        <input className='form-control' type='text' placeholder="Recipient's username" onChange={this.handleTitle} value={this.state.title} />
                    </MDBInputGroup>
                </MDBRow>
                <MDBRow>
                    <MDBInputGroup className='mb-3' textBefore='Tag Line @ '>
                        <input className='form-control' type='text' placeholder="Recipient's username" onChange={this.handleTagline} value={this.state.tagLine} />
                    </MDBInputGroup>
                </MDBRow>
                <MDBRow>
                    <MDBInputGroup className='mb-3' textBefore='No. Of Tabs @ '>
                        <input className='form-control' id='basic-url2' type='number' onChange={this.handleNoOfTabs} value={this.state.NoOfTabs} />
                    </MDBInputGroup>
                </MDBRow>
                <MDBRow className='mt-4'>
                    <MDBBtnGroup shadow='0'>
                        <MDBBtn  color='success' onClick={this.handleSave}>Save</MDBBtn>
                        <MDBBtn  color='danger' onClick={this.handleClearAll}>Clear All</MDBBtn>
                        <MDBBtn  color='warning' onClick={this.previewLogo}>Preview</MDBBtn>
                    </MDBBtnGroup>
                </MDBRow>
            </MDBCol>
            <MDBCol md='6'> 
                <MDBRow>
                    {this.state.logoURL && (
                        <header>
                            <MDBRow style={{ height: '10rem', marginRight: '2rem' }} >
                                <MDBCol md='2' className="d-flex justify-content-center align-items-center" >
                                    <img src={this.state.logoURL} alt="Selected Logo" width='200' height='200' />
                                </MDBCol>
                                <MDBCol md='10' className='titlecentered-col'>
                                    <div>
                                        <h1>{this.state.title}</h1>
                                        <h5>{this.state.tagLine}</h5>
                                    </div>
                                </MDBCol>

                            </MDBRow>
                        </header>
                    )}
                </MDBRow >
            </MDBCol>
        </MDBRow >
    </MDBContainer >
    )
  }
}
