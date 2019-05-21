import React from "react";



const navstyle = {
    backgroundColor:'#5133a4',
    height:'81px',
    color:'white',
    position: 'fixed',
    top: '0', 
    width: '100%',
    boxShadow: "0 7px 24px 0px gray"
    
}
const clickStyle = {
    float:"right",
    marginRight:'40px'
}


function NavBar(props) {
    return(
<div style ={navstyle}>
  <h1 >
    Clicky Game!
  </h1>
  <h1 style={clickStyle}>score:{props.score}</h1>
</div>
    );

}

export default NavBar;