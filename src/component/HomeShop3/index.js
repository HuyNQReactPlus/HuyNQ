import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './style.css';
import { Container, Row, Col, Nav, Form, Button, Card, Carousel, Image, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingBag, faEnvelope, faStar, faSlidersH, faEye } from '@fortawesome/fontawesome-free-solid';

import 'react-sticky-header/styles.css';

import OwlCarousel from 'react-owl-carousel2';

import 'react-owl-carousel2/src/owl.carousel.css'; //Allows for server-side rendering.

function HomeShop3(props) {

  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      productTop: "./assets/img/product/product1.jpg",
      productBot: "./assets/img/product/product2.jpg"
    },
    {
      productTop: "./assets/img/product/product3.jpg",
      productBot: "./assets/img/product/product4.jpg"
    },
    {
      productTop: "./assets/img/product/product5.jpg",
      productBot: "./assets/img/product/product6.jpg"
    },
    {
      productTop: "./assets/img/product/product7.jpg",
      productBot: "./assets/img/product/product8.jpg"
    },
    {
      productTop: "./assets/img/product/product9.jpg",
      productBot: "./assets/img/product/product10.jpg"
    },
    {
      productTop: "./assets/img/product/product1.jpg",
      productBot: "./assets/img/product/product2.jpg"
    },
    {
      productTop: "./assets/img/product/product3.jpg",
      productBot: "./assets/img/product/product4.jpg"
    },
    {
      productTop: "./assets/img/product/product5.jpg",
      productBot: "./assets/img/product/product6.jpg"
    },
    {
      productTop: "./assets/img/product/product7.jpg",
      productBot: "./assets/img/product/product8.jpg"
    },
    {
      productTop: "./assets/img/product/product9.jpg",
      productBot: "./assets/img/product/product10.jpg"
    },
  ])

  const options = {
    items: 5,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>"
    ],
    navClass: ["owl-prev", "owl-next"],
    rewind: true,
    autoplay: false
  };

  const events = {
    onDragged: function (event) { },
    onChanged: function (event) { }
  };

  return (
    <div>

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

        <div className="carousel_product">
          <OwlCarousel options={options} events={events}>
            {products.map(product => {
              return (
                <Card>
                  <div className="card_product">
                    <div className="img_product">
                      <Card.Img variant="top" src={product.productTop} />
                    </div>
                    <div class="action_links">
                      <Row>
                        <Nav>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faShoppingBag} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faSlidersH} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faHeart} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faEye} /></Nav.Link>
                        </Nav>
                      </Row>

                    </div>
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
                  </div>
                  <div className="card_product">
                    <div className="img_product">
                      <Card.Img variant="top" src={product.productBot} />
                    </div>
                    <div class="action_links">
                      <Row>
                        <Nav>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faShoppingBag} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faSlidersH} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faHeart} /></Nav.Link>
                          <Nav.Link className="link_icon_product" href="#"><FontAwesomeIcon className="icon_product" icon={faEye} /></Nav.Link>
                        </Nav>
                      </Row>

                    </div>
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
                  </div>
                </Card>
              )
            })}
          </OwlCarousel>
        </div>
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



    </div >
  )
}

HomeShop3.propTypes = {

}

export default HomeShop3

