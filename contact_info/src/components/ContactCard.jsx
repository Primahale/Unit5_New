import React, { useState } from "react";
import card from "./module.css";

const ContactCard = ({ id, profilePic, name, email, phone, onHide }) => {
  // const [contactCard, toggleCard] = UseCardToggle()
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="container"
        style={{
          display: "flex-box",
          padding: "1rem",
        //   border: "1px solid black",
          marginBottom: "0.25rem",
          gap: "1rem",
          width:"300px",
          margin:"auto"
        }}
      >
        <div className={card} onClick={() => setToggle(!toggle)}> 
        <div className="info">
          <div className={profilePic}>{profilePic}</div>
          <div>
            <div className={name} style={{fontWeight:"bold",fontSize:"20px"}}>{name}</div>

            <div className={email} style={{marginLeft:"20px",color:"gray"}}>{email}</div>
            {toggle ? <div className={phone}>{phone}</div> : ""}
          </div>
        </div>
       
        </div>
      
        <hr />
      </div>
    </div>
  );
};

export default ContactCard;
