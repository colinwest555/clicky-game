import React from "react";




const gameContainerStyle = {
   backgroundColor:"lightgrey",
    marginBottom:'0px'
}
const redBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"red",
    margin:"10px"
}
const greenBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"green",
    margin:"10px"
}
const blueBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"blue",
    margin:"10px"
}
const orangeBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"orange",
    margin:"10px"
}
const brownBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"brown",
    margin:"10px"
}
const peachBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"peach",
    margin:"10px"
}
const pinkBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"pink",
    margin:"10px"
}
const beigeBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"beige",
    margin:"10px"
}
const limeBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"lime",
    margin:"10px"
}
const maroonBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"maroon",
    margin:"10px"
}
const oliveBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"olive",
    margin:"10px"
}
const tealBox = {
    height:"186px",
    width:"168px",
    backgroundColor:"teal",
    margin:"10px"
}


function GameBoard(props) {
    return(
<div style ={gameContainerStyle}>
 <button className="grow pointer shadow-3" style={redBox}></button>
 <button className="grow pointer shadow-3" style = {greenBox}></button>
 <button className="grow pointer shadow-3" style = {blueBox}></button>
 <button className="grow pointer shadow-3" style = {tealBox}></button>
 <button className="grow pointer shadow-3" style = {oliveBox}></button>
 <button className="grow pointer shadow-3" style = {maroonBox}></button>
 <button className="grow pointer shadow-3" style = {limeBox}></button>
 <button className="grow pointer shadow-3" style = {beigeBox}></button>
 <button className="grow pointer shadow-3" style = {peachBox}></button>
 <button className="grow pointer shadow-3" style = {orangeBox}></button>
 <button className="grow pointer shadow-3" style = {brownBox}></button>
 <button className="grow pointer shadow-3" style = {pinkBox}></button>

</div>
    );

}

export default GameBoard;