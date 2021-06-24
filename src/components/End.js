import React from "react";
import { Card } from "react-bootstrap";
import Logo from "./Logo";

const style = {
    marginTop: '100px'
}
const bgStyle ={
    backgroundColor: '#C5CAE9'
}

const End = () => {
  return (
    <div style={bgStyle}>
        <div className="container">
            <Card style={style}>
                <Logo align='center'/>
                <Card.Body><b>Operational Hours</b></Card.Body>
                <Card.Body>Week days</Card.Body>
                <Card.Body>(Excluding national holidays)</Card.Body>
                <br />
                <Card.Body>Week end</Card.Body>
                <Card.Body>08.00-19.00</Card.Body>




            </Card>
      </div>
    </div>
  );
};

export default End;
