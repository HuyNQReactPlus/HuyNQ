import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Container, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserFriends, faHeart, faShoppingBag } from '@fortawesome/fontawesome-free-solid';


function index(props) {
  return (
    < div className="header" >
      {/* header */}
      <Container fluid>
        <Navbar className="mt-3" expand="lg" fixed="top" >
          <Col lg={2} md={3} sm className="col_logo">
            <Navbar.Brand href="#home" className="logo">
              <Image src="./assets/img/logo/logo.png" className="" alt="" />
            </Navbar.Brand>
          </Col>
          <Col lg={6} md={6} className="main_menu">
            <Navbar.Collapse id="responsive-navbar-nav" className="menu">
              <Nav className="">
                <NavDropdown title="home" id="collasible-nav-dropdown" className="menu_item active">
                  <NavDropdown.Item href="" className="sub_menu" >Home Shop 1</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Home Shop 2</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Home Shop 3</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Home Shop 4</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="shop" id="collasible-nav-dropdown" className="menu_item active">
                  <NavDropdown.Item href="" className="sub_menu" >Action</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Another action</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Something</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="blog" id="collasible-nav-dropdown" className="menu_item active">
                  <NavDropdown.Item href="" className="sub_menu" >Blog Details</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Blog FullWidth</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Blog Sidebar</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="pages" id="collasible-nav-dropdown" className="menu_item active">
                  <NavDropdown.Item href="" className="sub_menu" >About Us</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" > Services</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Frequently Questions</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Contant</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Login</NavDropdown.Item>
                  <NavDropdown.Item href="" className="sub_menu" >Error 404</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link id="collasible-nav-dropdown" href="" className="menu_item menu_link active">contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col lg={4} md={6} className="header_account_area">
            <Form inline>
              <FormControl type="text" placeholder="Search Product..." className=" form-header search_box" />
              <Button variant="link" className="icon btn_submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <Button variant="link" className="icon mr-2">
                <FontAwesomeIcon icon={faUserFriends} className="icon" />
              </Button>
              <Button variant="link" className="">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </Button>
              <Button variant="link" className="">
                <FontAwesomeIcon icon={faShoppingBag} className="icon" />
              </Button>
            </Form>
          </Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle">
          </Navbar.Toggle>
        </Navbar>
      </Container>
      {/* end header */}
    </div >
  )
}

index.propTypes = {

}

export default index

