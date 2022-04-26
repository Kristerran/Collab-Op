import React from "react";

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBContainer,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <MDBContainer fluid className="p-0">
      <Button>
        I am a button
      </Button>
      <MDBCarousel className="mb-6" showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src='./marvin-meyer-SYTO3xs06fU-unsplash.jpg' alt='...' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
            <MDBCarouselCaption className='carousel-caption d-block'>
              <h5>Welcome to CollabOp!</h5>
              <p>CollabOp is a networking tool for creatives. Let's create something amazing, together!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src='./chris-murray-iwfHhOZLVMU-unsplash.jpg' alt='...' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
            <MDBCarouselCaption className='carousel-caption d-block'>
              <h5>CollabOp is still in development!</h5>
              <p>Check back often for features and updates!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src='./laura-adai-5H2ketFL1LE-unsplash.jpg' alt='...' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
            <MDBCarouselCaption className='carousel-caption d-block'>
              <h5>CollabOp Alpha</h5>
              <p>Coing soon!</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <MDBContainer fluid>
      <MDBRow className='row-cols-1 row-cols-md-2'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Home;