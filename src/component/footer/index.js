import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

import { Container, Row, Col, Nav, Card, Image, } from 'react-bootstrap'

function index(props) {
  return (
    <div className="footer_widgets">
      {/* footer */}
      <div className="footer_top">
        <Container>
          <Row>
            <Col lg={2} md={3} sm={6}>
              <div className="widgets_container contact_us">
                <h3>Opening Time</h3>
                <Card.Text><span>Mon - Fri:</span> 8AM - 10PM</Card.Text>
                <Card.Text><span>Sat:</span> 9AM-8PM</Card.Text>
                <Card.Text><span>Suns:</span> 14hPM-18hPM</Card.Text>
                <Card.Text><b>We Work All The Holidays</b></Card.Text>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="widgets_container widget_menu">
                <h3>Information</h3>
                <div className="footer_menu">
                  <Nav>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Checkout</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Frequently Questions</Nav.Link>
                    <Nav.Link href="#">Wishlist</Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="widgets_container widget_app">
                <div className="footer_logo">
                  <Nav.Link href="index.html"><Image src="assets/img/logo/logo.png" alt="" /></Nav.Link>
                </div>
                <div className="footer_widgetnav_menu">
                  <Nav>
                    <Nav.Link href="#">Payment</Nav.Link>
                    <Nav.Link href="#">Affiliates</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Internet</Nav.Link>
                  </Nav>
                </div>
                <div className="footer_social">
                  <Nav>
                    <Nav.Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                    <Nav.Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Nav.Link>
                    <Nav.Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Nav.Link>
                    <Nav.Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                  </Nav>
                </div>
                <div className="footer_app">
                  <Nav>
                    <Nav.Link href="#"><Image src="assets/img/icon/icon-app.jpg" alt="" /></Nav.Link>
                    <Nav.Link href="#"><Image src="assets/img/icon/icon1-app.jpg" alt="" /></Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="widgets_container widget_menu">
                <h3>My Account</h3>
                <div className="footer_menu">
                  <Nav>
                    <Nav.Link href="#">My Account</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Shopping cart</Nav.Link>
                    <Nav.Link href="#">Checkout</Nav.Link>
                    <Nav.Link href="#">Shop</Nav.Link>
                    <Nav.Link href="#">Order History</Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="widgets_container widget_menu">
                <h3>Customer Service</h3>
                <div className="footer_menu">
                  <Nav>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                    <Nav.Link href="#">Terms of use</Nav.Link>
                    <Nav.Link href="#">Privacy Policy</Nav.Link>
                    <Nav.Link href="#">Site Map</Nav.Link>
                    <Nav.Link href="#">My Account</Nav.Link>
                    <Nav.Link href="#">Returns</Nav.Link>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer_bottom">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="copyright_area">
                <Card.Text>Copyright &copy; 2020 <a href="facebook.com">Lukani</a> All Right Reserved.</Card.Text>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="footer_payment">
                <a href="facebook.com"><Image src="./assets/img/icon/payment.png" alt="" /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end footer */}
    </div>

  )
}

index.propTypes = {

}

export default index

