import { MDBCol,MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import React, { Component } from 'react'
import NewsComponent from './news'
import CardComponent from './CardPage'
import NotificationComponent from './NotificationPage'

export default class HomePage extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <MDBContainer className='p-0'>
        <MDBRow>
          <MDBCol md='3' className='ml-0'>
            <h4>News...</h4>
            <NewsComponent/>
          </MDBCol>
          <MDBCol md='6'>
          <h4>About Us...</h4>
            <CardComponent/>
          </MDBCol>
          <MDBCol md='3'>
          <h4>Notification...</h4>
            <NotificationComponent/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
