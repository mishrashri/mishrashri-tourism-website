import React, { Component , useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";

const Contact=()=> {
  
    const [userData,setUserData]= useState({
      Name:"",
      Email:"",
      Message:"",
    });


    let name,value;
    const postUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setUserData({...userData,[name]:value});
    };

    //firebase
    const submitData=async (event)=>{
        event.preventDefault();
        const{Name,Email,Message}= userData;
        const res=fetch("https://tourism-website-mishrashri-default-rtdb.firebaseio.com/userDataRecords.json",
        {method:"POST",
        Headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({Name,Email,Message
        }),

      });
      if(res){
        alert("Data Stored");
      } else {
        alert("Please Fill the Data");
      }

    };

    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Contact</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>+91 8433264627</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Barsana, Mathura, Uttar Pradesh</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>mishrashri2022@gmail.com</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="" method="POST">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    value={userData.Name}
                    onChange={postUserData}
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    value={userData.Email}
                    onChange={postUserData}
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                    value={userData.Message}
                    onChange={postUserData}
                  />
                  <Button outline color="light" className="float-left" onClick={submitData}>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }


export default Contact;
