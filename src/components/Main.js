import React, {Component} from "react";
import NavBar from "./NavBar";
import Instructions from "./Instructions";
import GameBoard from "./GameBoard";
import Footer from "./Footer"



class Main extends Component {
    state = {
        score: 0,
        };
    

render() {
return (
    <div>
    <Instructions/>
    <NavBar/>
    <GameBoard/>
    <Footer/>
    </div>
)
}

}


export default Main;




