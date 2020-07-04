import React from 'react'
// import PropTypes from 'prop-types'
import './style.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends, faHeart, faShoppingBag, faEnvelope } from '@fortawesome/fontawesome-free-solid'

function index(props) {
  return (
    <div>
      {/* offcanvas_menu */}
      <div className="offcanvas_menu">
        <Container fluid>
          <Col xs={12}>
            <div className="offcanvas_menu_wrapper">

            </div>
          </Col>
        </Container>
      </div>
      {/* end offcanvas_menu */}
      {/* header */}
      <div className="header">
        <Container fluid>
          <Navbar className="mt-3">
            <Col lg={2} md={3} sm className="col_logo">
              <Navbar.Brand href="#home" className="logo">
                <img src="./assets/img/logo/logo.png" className="" alt="" />
              </Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Col lg={6} md={0} className="main_menu">
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
                  <Nav.Link id="collasible-nav-dropdown" href="#pricing" className="menu_item menu_link active">contact us</Nav.Link>
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
          </Navbar>
        </Container>
      </div>
      {/* end header */}
      {/* welcome_lukani_store */}
      <div className="welcome_lukani_store">
        <Container>
          <div className="welcome_lukani_container">
            <Row>
              <Col lg={5} md={5}>
                <div className="welcome_lukani_thumb">
                  <img src="assets/img/bg/img-top-vogue3.png" alt="" />
                </div>
              </Col>
              <Col lg={7} md={7}>
                <div className="welcome_lukani_content">
                  <div className="welcome_lukani_header">
                    <h3>Welcome to Lukani store</h3>
                    <h2>Lukani History</h2>
                  </div>
                  <div className="welcome_lukani_desc">
                    <Card.Text className="welcome_text">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas
                  sedurna malesuada consectetuer.</Card.Text>
                    <Card.Text className="welcome_text">Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra.
                    Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus,
                  condimentum tempor quis, turpis luctus dolor sapien vivamus.</Card.Text>
                  </div>
                  <div className="welcome_lukani_footer">
                    <img src="assets/img/bg/signature.png" alt="" />
                    <Card.Text className="welcome_text"><span>john doe</span> – CEO Lukani</Card.Text>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* end welcome_lukani_store */}
      {/* newsletter area start */}
      <div className="newsletter_area_start newsletter_two">
        <Container>
            <Col xs={12}>
              <div className="section_title">
                <h2>Get <span>20% Off</span> Your Next Order</h2>
              </div>
              <div className="newsletter_container">
                <div className="subscribe_form">
                  <Form id="mc-form" className="mc-form footer-newsletter">
                    <input id="mc-email" type="email" placeholder="Enter you email" />
                    <Button variant="link" id="mc-submit" className="btn_sub">Subscribe</Button>
                    <FontAwesomeIcon icon={faEnvelope} className="email_icon" ></FontAwesomeIcon>
                  </Form>
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success"></div>
                    <div className="mailchimp-error"></div>
                  </div>
                </div>
              </div>
            </Col>
        </Container>
      </div>
      {/* end newsletter area start */}
      
    </div>
  )
}

index.propTypes = {

}

export default index

