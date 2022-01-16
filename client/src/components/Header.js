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
    MDBIcon
  } from 'mdb-react-ui-kit';

const Header = () => {
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='white' fixed>
    <MDBContainer fluid>
    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
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
            <MDBNavbarLink aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>About</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>

    </header>
  );
};

export default Header;