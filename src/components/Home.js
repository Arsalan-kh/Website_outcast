// import React from 'react';
// import Figure from 'react-bootstrap/Figure';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import hose from '../assets/4 foot house.jpg';
// import burner from '../assets/burner.jpg';
// import fryer from '../assets/Fryer.png';
// import Container from 'react-bootstrap/Container';

// import cylinder from '../assets/small-cylinder.png';
// import { useHistory } from "react-router-dom";
// import logo from '../assets/Logo1.png';
// const Home = () => {
//   let history = useHistory();

//   return (
// <>
//   <Container>
//   {/* First HomePage Section*/}

//   {/* Second HomePage Section*/}

//       <Container className="second-section">
//           <h1 class="text-center second-section-heading"> Why Choose <span className = "home-page-heading-span">Us</span>?</h1>
//           <CardGroup >
//     <Card className="cards mb-5">
//     <Card.Body class="m-5">
//     <i class="second-sec-icons fas fa-hand-holding-usd"></i>
//     <Card.Title>
//           <p className = "text-center mt-4"> Best quality with
// Affordable Price

//           </p>
//         </Card.Title>
//       <Card.Text class="text-left">
//       We provide you
// a best services in
// US at very affordable
// price
//       </Card.Text>
//     </Card.Body>
//     </Card>

//     <Card className="cards mb-5">
//     <Card.Body class="m-5">
//     <i class="second-sec-icons fas fa-people-carry"></i>
//     <Card.Title>
//           <p className = "text-center mt-4"> Reliable & perfect
//   for commercial

//           </p>
//         </Card.Title>
//       <Card.Text>
//       We provide you
// a best services in
// US at very affordable
// price
//       </Card.Text>
//     </Card.Body>
//     </Card>

//     <Card className="cards mb-5">
//     <Card.Body class="m-5">
//     <i class="second-sec-icons fas fa-globe-americas"></i>
//     <Card.Title>
//           <p className = "text-center mt-4"> Location Around
// The World
//           </p>
//         </Card.Title>
//       <Card.Text>
//       We provide you
// a best services in
// US at very affordable
// price
//       </Card.Text>
//     </Card.Body>
//     </Card>

//   </CardGroup>
//   </Container>

//   {/* third HomePage Section*/}
//   <div className = "section-heading mt-5">
//           <h1 class="third-section-heading"> Featured <span className = "home-page-heading-span">Products</span></h1>
//         </div>
//   <CardGroup>
    
//     <Card className="feature-card cards mb-5">
//     <Card.Body>
//     <Card.Img className="w-50 feature-image" variant="top" src={burner} roundedCircle />
//       <Card.Title className="text-muted ">
//    Burner
//       </Card.Title>
//       <p>Triple Burner Stove – AW6901</p>
//       <Card.Title className="text-muted feature-card-price">
//    $175.00
//       </Card.Title>
//       <p>Triple Burner Stove – AW6901</p> <hr width="90%"/>
//       <div className="d-flex justify-content-around">
//       <div>start</div>
//       <button class="feature-card-btn">
//       <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="10.65" viewBox="0 0 14 12.65">
//   <path id="Path_39" data-name="Path 39" d="M7.07,10.72,7,10.789l-.077-.069C3.6,7.749,1.4,5.784,1.4,3.792A2.374,2.374,0,0,1,3.85,1.379a2.749,2.749,0,0,1,2.5,1.627h1.3a2.749,2.749,0,0,1,2.5-1.627A2.374,2.374,0,0,1,12.6,3.792C12.6,5.784,10.4,7.749,7.07,10.72ZM10.15,0A4.237,4.237,0,0,0,7,1.434,4.237,4.237,0,0,0,3.85,0,3.78,3.78,0,0,0,0,3.792c0,2.6,2.38,4.729,5.985,7.948L7,12.65l1.015-.91C11.62,8.521,14,6.39,14,3.792A3.78,3.78,0,0,0,10.15,0Z" fill="#b22234"/>
// </svg> Watch</button>
//       </div>
//     </Card.Body>
//     </Card>

//     <Card className="feature-card cards mb-5">
//     <Card.Body>
//     <Card.Img className="w-50 feature-image" variant="top" src={fryer} roundedCircle />
//       <Card.Title className="text-muted">
//       Propane Tank
//       </Card.Title>
//       <p>Triple Burner Stove – AW6901</p>
//       <Card.Title className="text-muted feature-card-price">
//    $175.00
//       </Card.Title>
//       <p>Triple Burner Stove – AW6901</p> <hr width="90%"/>
//       <div className="d-flex justify-content-around">
//       <div>start</div>
//       <button class="feature-card-btn">
//       <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="10.65" viewBox="0 0 14 12.65">
//   <path id="Path_39" data-name="Path 39" d="M7.07,10.72,7,10.789l-.077-.069C3.6,7.749,1.4,5.784,1.4,3.792A2.374,2.374,0,0,1,3.85,1.379a2.749,2.749,0,0,1,2.5,1.627h1.3a2.749,2.749,0,0,1,2.5-1.627A2.374,2.374,0,0,1,12.6,3.792C12.6,5.784,10.4,7.749,7.07,10.72ZM10.15,0A4.237,4.237,0,0,0,7,1.434,4.237,4.237,0,0,0,3.85,0,3.78,3.78,0,0,0,0,3.792c0,2.6,2.38,4.729,5.985,7.948L7,12.65l1.015-.91C11.62,8.521,14,6.39,14,3.792A3.78,3.78,0,0,0,10.15,0Z" fill="#b22234"/>
// </svg> Watch</button>
//       </div>
//     </Card.Body>
//     </Card>

//   </CardGroup>
//   </Container>
//          {/* fourth HomePage Section*/}

//   {/* Fifth HomePage Section*/}

// {/*
//     <Card className = "radius-section">
//     <Card.Body>

//     </Card.Body>
//     </Card>  */}

//     </>
//   );
// };
// export default Home;

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import worldMap from "../assets/world-map.png";
import googleBtn from "../assets/google-btn.png";
import appleBtn from "../assets/apple-btn.png";
import cylinder from "../assets/small-cylinder.png";
import { useHistory } from "react-router-dom";
import Categories from './Categories';
import { FloatingLabel } from "react-bootstrap";
const Home = () => {
  let history = useHistory();
  return (
    <>
      <Container>
        {/* First HomePage Section*/}
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <p className="home-page-heading">
                  {" "}
                  Not So Fast,
                  <br />
                  Natural <span className="home-page-heading-span">
                    Gas
                  </span>{" "}
                </p>
              </Card.Title>
              <Card.Text>
                <p className="home-page-text">
                  Our products comprise industrial gases
                  <br />
                  for commercial and consumer use
                </p>
                <a
                  className="download-btn"
                  onClick={() => history.push("/placeorder")}
                >
                  <img width="130px" src={googleBtn}></img>
                </a>
                <a
                  className="download-btn"
                  onClick={() => history.push("/placeorder")}
                >
                  <img width="156px" src={appleBtn}></img>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              class="header-img"
              variant="top"
              src={cylinder}
              roundedCircle
            />
          </Card>
        </CardGroup>
        {/* Second HomePage Section: */}
        <Container className="second-section">
          <h1 class="text-center second-section-heading">
            {" "}
            Why Choose <span className="home-page-heading-span">Us</span>?
          </h1>
          <CardGroup>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-hand-holding-usd"></i>
                <Card.Title>
                  <p className="text-center mt-4">
                    {" "}
                    Best quality with Affordable Price
                  </p>
                </Card.Title>
                <Card.Text class="text-left">
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-people-carry"></i>
                <Card.Title>
                  <p className="text-center mt-4">
                    {" "}
                    Reliable & perfect for commercial
                  </p>
                </Card.Title>
                <Card.Text>
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="cards mb-5">
              <Card.Body class="m-5">
                <i class="second-sec-icons fas fa-globe-americas"></i>
                <Card.Title>
                  <p className="text-center mt-4"> Location Around The World</p>
                </Card.Title>
                <Card.Text>
                  We provide you a best services in US at very affordable price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        {/* Third HomePage Section: Featured Products*/}
      <div className="section-heading">
        <h1>
          {" "}
          Featured <span className="home-page-heading-span">Products</span>
        </h1>
      </div>
      <Categories />
      </Container>
      {/* Fourth HomePage Section: Contact Us*/}
      <CardGroup>
        <Card className=" fourth ">
          <Card.Body>
            <Card.Text>
              <p className="home-page-section-text">
                Learn about the types of home{" "}
                <span className="home-page-heading-span">propane</span> tanks
                you can install on
              </p>
            </Card.Text>
            <Button className="btn" onClick={() => history.push("/placeorder")}>
              Contact Us <i class="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Card.Body>
        </Card>

        <Card className=" fourth ">
          <Card.Body>
            <Card.Img
              className=" fourth-sec-img"
              variant="top"
              src={cylinder}
              roundedCircle
            />
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Fifth HomePage Section*: ZipCode Section*/}
      <Card className="radius-section">
        <Card.Body className="zip">
          <Card.Text>
            <p className="home-page-section-text">
              Are you inside our radius?
              <br />
              Enter your{" "}
              <span className="home-page-section-span">Zip Code</span> to
              Find...
            </p>
          </Card.Text>
          <input
            className="col-xs-3 input-zipcode"
            type="text"
            id="zipcode"
            placeholder="Zip Code"
          />
          <Button
            className="btn-go"
            onClick={() => history.push("/Radius")}
          >
            Go <i class="fas fa-long-arrow-alt-right"></i>
          </Button>
        </Card.Body>
        <Card.Img
          className="fifth-img"
          variant="top"
          src={worldMap}
          roundedCircle
        />
      </Card>
    </>
  );
};
export default Home;
