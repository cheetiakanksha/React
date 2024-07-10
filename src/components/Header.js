import { LOGO_URL } from "../utils/constants";
import {useState} from"react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=() =>{
    const [btnNameReact,setBtnNameReact]=useState("Login");
    console.log("header rendered");
    const status=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return (<div className="flex justify-between bg-red-200 shadow-md">
        <div className="logo">
            <img alt="logo "src=""></img>
        </div>
        <div className="flex">
            <ul className="flex flex-wrap m-4 p-4 ">
                <li className="mx-2 px-2 ">onlinestatus:{status ? "✅" : "🛑"}</li>
                <li className="mx-2 px-2 hover:font-extrabold "><Link to="/">Home</Link></li>
                <li className="mx-2 px-2 hover:font-extrabold"><Link to="/about">About us</Link></li> 
                <li className="mx-2 px-2 hover:font-extrabold"><Link to="/contact">contact us</Link></li>
                <li className="mx-2 px-2 hover:font-extrabold"><Link to="/grocery">Grocery</Link></li>
                <li className="mx-2 px-2 hover:font-extrabold"><Link to="/cart">cart({cartItems.length})</Link></li>
                <button className="hover:font-extrabold" onClick={()=>{
                    if(btnNameReact=="Login"){ setBtnNameReact("Logout");}
                    else{setBtnNameReact("Login");}
                    
                }}>{btnNameReact}</button>
                <li className=" mx-2 px-2">{loggedInUser}</li>
            </ul>
        </div>
    </div>)
};
export default Header;