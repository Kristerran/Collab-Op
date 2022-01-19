import React, { useState } from "react";
import {
  MDBNavbar,
  MDBCollapse,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBFooter,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home'
import Feed from '../pages/Feed'
import Page from '../pages/Page'
import Search from '../pages/Search'

const Main = () => {

  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <MDBNavbar expand='lg' light bgColor='white' fixed>
            <MDBContainer fluid>
              <MDBNavbarBrand>
              <Link to="/">
                <img src='./logo.svg'></img>
                CollabOp
              </Link>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavNoToggler(!showNavNoToggler)}
              >
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavNoToggler}>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                  <MDBNavbarLink>
                    <Link to="/">Home</Link>
                  </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                    <Link to="/feed">Feed</Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                    <Link to="/user">Account</Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                    <Link to="/search">Search</Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/user" element={<Page />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
        <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
      </BrowserRouter>
    </div>
  );
};

export default Main;