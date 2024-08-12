import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';
import './style/customstyle.css';

let mdbCards = [];
const cardWidth = 2;
export default class ResultPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        mdbCards = [
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/041.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/042.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/043.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/044.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/045.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/046.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/041.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/042.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/043.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/044.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/045.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/046.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/041.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/042.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/043.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/044.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/045.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/046.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/041.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/042.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/043.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/044.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/045.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            },
            {
                imgSrc: "https://mdbootstrap.com/img/new/standard/city/046.webp",
                title: "Card title",
                desc: " This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
            }
        ]
    }

    render() {
        return (
            <MDBContainer className='scrollable-row'>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
                    {mdbCards.map((card, indx) => {
                        return (
                            <MDBCol md={cardWidth} key={indx}>
                                <MDBCard >
                                    <MDBCardImage
                                        src={card.imgSrc}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>{card.title}</MDBCardTitle>
                                        <MDBCardText>
                                            {card.desc}
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })}
                </MDBRow>
            </MDBContainer>

        )
    }
}
