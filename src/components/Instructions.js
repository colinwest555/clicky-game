import React from "react"

const insctuctionsStyle = {
    width: '100%',
    height: "389px",
    backgroundColor: '#2c323c',
   color:"white",
   textAlign: "center",
   marginTop:"80px"
}


function Instructions(props) {
    return(
<div style ={insctuctionsStyle}>
  
  <h1>
      Clicky Game!
  </h1>
  <h3 >
  Click on a box to earn points, but don't click on any more than once!
  </h3>
</div>
    );

}

export default Instructions;