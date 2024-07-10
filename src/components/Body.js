import RestCards from "./RestCards";
import {useState ,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body= () =>{
    const [listOfRestraurants, setlistOfRestraurants]=useState([]);
    const [filteredRestraurant, setFilteredRestraurant]=useState([]);
    const [searchName, setSearchName]=useState("");
    const {setUserName}=useContext(UserContext);
    useEffect(()=> {
        fetchData()
    },[])
    const fetchData=async ()=>{
        const Data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const json= await Data.json();
    console.log(json);
    setlistOfRestraurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestraurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    if(listOfRestraurants.length===0){
        return <Shimmer/>
    }
    
    return (<div className="body-main">
        <div className="m-4 p-4 flex  justify-between">
            <div className="space-x-4">
                <input type="text" placeholder=" search" className="border-2 border-black-900 rounded-lg"
                value={searchName}
                onChange={(e)=>{
                    setSearchName(e.target.value);
                }}></input>
                <button className="bg-red-200 hover:bg-red-300 rounded-md px-4" onClick={()=>{
                    const filteredRestraurants=listOfRestraurants.filter((res)=>res.info.name.toLowerCase().includes(searchName.toLowerCase()));
                setFilteredRestraurant(filteredRestraurants);
                }
                }>Search</button>
            </div>
                <button className="bg-red-200 hover:bg-red-300 rounded-md px-4" onClick={() =>{
                    console.log(listOfRestraurants);
                    const filteredList= listOfRestraurants.filter((res)=>
                        res.info.avgRating>4);
                    
                    setFilteredRestraurant(filteredList)}
                }>Top Rated Restraurants</button>
                <div>
                <label> username : </label>
                <input type="text" placeholder=" edit your name"
                 className="border-2 border-black-900 rounded-lg"onChange={(e)=>setUserName(e.target.value)}></input>
                </div>

            
            </div>
            <div className="flex flex-wrap m-2 p-2 ">
                {filteredRestraurant.map((restaurant)=>
                (<Link key={restaurant.info.id} to={"/restraurant/"+restaurant.info.id}>
                <RestCards  resData={restaurant}/></Link>
                    
                ))};
            </div>
    </div>)
}
export default Body;