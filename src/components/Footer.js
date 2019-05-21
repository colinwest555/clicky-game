import React from "react";



const footerStyle = {
    backgroundColor:'#5133a4',
    height:'81px',
    color:'white',
    bottom: '0', 
    width: '100%',
    marginTop: '0px'
    
    
}
const footerTitleStyle = {
    marginTop: '0px',
   
    
}

function Footer(props) {
    return(
<div style ={footerStyle}>
  <h3 style = {footerTitleStyle} >
    Clicky Game!
  </h3>
</div>
    );

}

export default Footer;