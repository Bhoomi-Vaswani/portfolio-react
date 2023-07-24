import "./Bannerimg2.css";
import React, { Component } from "react";

class Bannerimg2 extends Component {
  render(){
  return (
    <div className="banner2">
        <div className="heading">
          <h1>{this.props.heading} </h1>
          <p> {this.props.text}  </p>
        </div>
    </div>
  );
  }
}

export default Bannerimg2;
