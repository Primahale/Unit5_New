


import React from "react";

const ImageRest = ({ src, name, width }) => {
  return <img width={width} src={src} alt={name} />;
};

export const RestaurantCard = ({ data }) => {
  const {
    name,
    id,
    
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = data;
  return (
    <div style={{ border: "1px solid skyBlue",width:"850px",margin:"auto" }}>
      <div style={{display:"flex", flexDirection: "columns", padding: 10 }}>
        <div style={{ flex: 3, alignSelf: "center" }}>
          <ImageRest src={src} alt={name} width={"300px"}  />
        </div>
        <div style={{ textAlign: "left", flex: 2 }}>
          <h2 style={{color:"white"}}> {name} </h2>
          {/* <p> {cuisine.join(", ")}</p> */}
          <h5 style={{color:"white"}}> Cost: ₹{costForTwo} </h5>
          <h5 style={{color:"white"}}>
            Min: ₹{minOrder} - Upto {deliveryTime} min
          </h5>
          <h5 style={{color:"green"}}>
            Accepts: {cash && card ? "Cash and Card" : card ? "Card" : "Cash"}
          </h5>
        </div>
        
        <div style={{ textAlign: "right", flex: 0.8, paddingTop: 20 }}>

          <div style={{width:"40px",backgroundColor:"green",textAlign:"center",color:"white",marginLeft:"50px"}}>⋆ {rating} </div>
          <div style={{color:"white"}}>{votes} votes</div>
          <div style={{color:"white"}}>{reviews} reviews </div>
          <button style={{width:70,height:30,backgroundColor:"dodgerblue",color:"white",border:"none",margin:"10px",borderRadius:"4px",fontSize:"13px"}}> 🛒 Add</button>
        </div>
      </div>
      {/* <div
        style={{
          textAlign: "right",
          padding: 15,
          // borderTop: "1px solid black"
        }}
      >
       
      </div> */}
    </div>
  );
};
