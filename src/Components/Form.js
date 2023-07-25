import "./Form.css";
import React from "react";

export default function Form() {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea row="6" placeholder="your message here"/>
            <button className="btn">SUBMIT</button>
        </form>
      
    </div>
  )
}
