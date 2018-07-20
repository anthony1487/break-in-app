import React from 'react';
import './Landing.css'
import { Mask, Row, Col, Button, View, Container} from 'mdbreact';


class LandingPage extends React.Component {

  render(){

    return (
      <div id="landing_page">
          <View>
            <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row className="intro-content">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                  <Button color="white">Download</Button>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" alt="landingImg"/>
                </Col>
                </Row>
              </Container>
            </Mask>
          </View>
          </div>
    );
  }
};

export default LandingPage;
