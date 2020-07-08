import React from 'react'
// import PropTypes from 'prop-types'
import './style.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Carousel, Image, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends, faHeart, faShoppingBag, faEnvelope, faStar } from '@fortawesome/fontawesome-free-solid';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function index(props) {

  return (
    <div>
      {/* header */}
      <StickyHeader>
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
      </StickyHeader>
      {/* end header */}

      {/* slider */}
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./assets/img/slider/slider7.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./assets/img/slider/slider8.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./assets/img/slider/slider9.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* end slider */}

      {/* welcome_lukani_store */}
      <div className="welcome_lukani_store">
        <Container>
          <div className="welcome_lukani_container">
            <Row>
              <Col lg={5} md={5}>
                <div className="welcome_lukani_thumb">
                  <Image src="assets/img/bg/img-top-vogue3.png" alt="" />
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
                    <Image src="assets/img/bg/signature.png" alt="" />
                    <Card.Text className="welcome_text"><span>john doe</span> – CEO Lukani</Card.Text>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* end welcome_lukani_store */}

      {/* product area start */}

      {/* ./assets/img/product/product1.jpg */}
      <div className="product_area product_style2">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section_title">
                <h2>Featured Products</h2>
              </div>
            </Col>
          </Row>
        </Container>

        <Carousel >
          <Carousel.Item >
            <Container fluid>
              <Row className="product_center">
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product1.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product2.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product3.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product4.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product5.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product6.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product7.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product8.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product9.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product10.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item >
            <Container fluid>
              <Row className="product_center">
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product1.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product2.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product3.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product4.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product5.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product6.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product7.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product8.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product9.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product10.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item >
            <Container fluid>
              <Row className="product_center">
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product1.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product2.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product3.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product4.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product5.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product6.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product7.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product8.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={2}>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product9.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./assets/img/product/product10.jpg" />
                    <Card.Body >
                      <div className="product_center">
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                        <FontAwesomeIcon icon={faStar} className="icon-start" />
                      </div>
                      <Card.Title className="product_title mb-4">commodo augue nisi</Card.Title>

                      <Card.Text className="product_center">£68.00</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

        </Carousel>
      </div >

      {/* product area end */}

      {/* testimonial area start */}
      <div className="testimonial_area testimonial_two">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section_title">
                <h2>What Our Customers Says ?</h2>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="row">
            <Carousel>
              <Carousel.Item>
                <Col lg={12}>
                  <div className="single-testimonial">
                    <div className="testimonial-icon-img">
                      <Image src="assets/img/about/testimonials-icon.png" alt="" />
                    </div>
                    <div className="testimonial_content">
                      <p>“ When a beautiful design is combined with powerful technology,
                      it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the
                    awesome product. ”</p>
                      <div className="testimonial_text_img">
                        <a href="abc.com"><Image src="assets/img/about/testimonial1.png" alt="" /></a>
                      </div>
                      <div className="testimonial_author">
                        <p><a href="abc.com">Rebecka Filson</a> / <span>CEO of CSC</span></p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col lg={12}>
                  <div className="single-testimonial">
                    <div className="testimonial-icon-img">
                      <Image src="assets/img/about/testimonials-icon.png" alt="" />
                    </div>
                    <div className="testimonial_content">
                      <p>“ When a beautiful design is combined with powerful technology,
                      it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the
                    awesome product. ”</p>
                      <div className="testimonial_text_img">
                        <a href="abc.com"><Image src="assets/img/about/testimonial2.png" alt="" /></a>
                      </div>
                      <div className="testimonial_author">
                        <p><a href="abc.com">Rebecka Filson</a> / <span>CEO of CSC</span></p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col lg={12}>
                  <div className="single-testimonial">
                    <div className="testimonial-icon-img">
                      <Image src="assets/img/about/testimonials-icon.png" alt="" />
                    </div>
                    <div className="testimonial_content">
                      <p>“ When a beautiful design is combined with powerful technology,
                      it truly is an artwork. I love how my website operates and looks with this theme. Thank you for the
                    awesome product. ”</p>
                      <div className="testimonial_text_img">
                        <a href="abc.com"><Image src="assets/img/about/testimonial3.png" alt="" /></a>
                      </div>
                      <div className="testimonial_author">
                        <p><a href="abc.com">Rebecka Filson</a> / <span>CEO of CSC</span></p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      </div>
      {/* testimonial area end */}

      {/* blog area start */}
      <div className="blog_section">
        <Container>
          <Col>
            <div className="section_title">
              <h2>Our Latest Posts</h2>
            </div>
          </Col>
        </Container>

        <div>
          <Carousel>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog1.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog2.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog3.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog1.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog2.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog3.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog1.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog2.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="carousel_item">
                    <Card>
                      <Card.Img variant="top" src="./assets/img/blog/blog3.jpg" />
                      <Card.Body>
                        <Card.Title>Post with Audio</Card.Title>
                        <Card.Text>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus praesent
                      </Card.Text>
                        <a href="google.com">Continue Reading</a>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
      {/* end blog area start */}

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

      {/* footer */}

      <div className="footer_widgets">
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
      </div>
      {/* end footer */}

    </div >
  )
}

index.propTypes = {

}

export default index

