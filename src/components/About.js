import Use from "./Use";
import Userclass from "./Userclass";
import {Component} from "react";
import UserContext from "../utils/UserContext";
/*const About=()=>{
return (<div className="about-main">
    <h1>About Us</h1>
    <h2>Swiggy</h2>
    <Use name={"Akanksha"}/>
    <Userclass name={"Akanksha"}/>
</div>)
}*/
class About extends Component{
   constructor(props){
    super(props);
    console.log("parent constructor");
   }

   componentDidMount(){
    console.log("parent mounted");
   }

   render(){
    console.log("parent rendered");
    return(<div className="about-main">
        <h1>About Us</h1>
        <h2>Swiggy</h2>
        
        <Userclass name={"Akanksha"}/>
        <Userclass name={"Akanksha"}/>

        </div>
    );
   }
}
export default About;