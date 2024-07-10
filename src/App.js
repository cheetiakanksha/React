/*const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"hello world");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
//nested elements also has 2 children
/*const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},[React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
//nested elements also has 2 children and sub children

/*const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")],
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")]))]
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
// using jsx (it is a html like xml like syntax)
/*const jsxHeading=<h1 id="heading" className="head">hello is printed using jsx</h1>;
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);*/
// React functional component (uses arrow function)
/*const ele=<h1>just an element</h1>
const Title =() =>(
    <h1>hello from second component</h1>)

const  HeadingComponent=() =>(
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        {ele}
        <h1 id="first" className="h1">hello</h1>
    </div>
)
// rendering headingcomponent
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)*/
import React, {lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from  "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import { Outlet } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Restmenu from "./components/Restmenu";
import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery";
import CartPage from "./components/CartPage";
const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=() =>{
    const [userName,setUserName]=useState(null);
    useEffect(()=>{
        const data={
            name:"Akanksha"
        }
        setUserName(data.name);
    },[])
    return(
        /*<UserContext.Provider value={{loggedInUser:userName,setUserName}}></UserContext.Provider>);*/
            <Provider store={appStore}>
                <div className="main">
                    <Header/>
                    <Outlet/>
                </div>
            </Provider>);
           
        
};
const approute=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<CartPage/>
            },
            {
                path:"/restraurant/:restId",
                element:<Restmenu/>
            }
        ],
        errorElement:<Error/>,
        
    },
   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute}/>);