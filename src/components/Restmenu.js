import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestraurantMenu from "../utils/useRestraurantMenu"
import RestraurantMenuList from "./RestraurantMenuList";
import {useState} from "react";
const Restmenu=()=>{
    /*const [menuList, setMenuList]=useState(null);
    useEffect(()=>{
        fetchMenu()
    },[]);*/
    const {restId}=useParams();
    console.log(restId);
    const menuList=useRestraurantMenu(restId);
    const [showIndex,setShowIndex]=useState(null);
    /*const fetchMenu=async ()=>{
        console.log("here")
        console.log(MENU_URL+restId)
        const data=await fetch(MENU_URL+restId);
        console.log(data);
        const json=await data.json();
        console.log("in rest menu");
        console.log(json);
        setMenuList(json?.data);
    }*/
    if( menuList===null){
        return <Shimmer/>
    }
    console.log(menuList);
    const {name,cuisines,
        costForTwoMessage
        }=menuList?.cards[2]?.card?.card?.info
    console.log(name);
    const {itemCards}=menuList?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(menuList?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards);
    const categories= menuList?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories)
    return (
    <div className=" items-center justify-center">
        <div className="w-6/12 mx-auto bg-gray-200 text-center border-gray border-1 justify-center shadow-2xl p-4 m-4 rounded-lg">
            <h1 className="font-extrabold ">{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            
            </div>
            <div>
                <ul>
                {/*{itemCards.map(item =><li>{item.card.info.name}- Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}*/}
                {categories.map((card,index)=>
                    (<RestraurantMenuList data={card?.card?.card}
                     showItems={index== showIndex? true:false}
                     setShowIndex={()=>setShowIndex(index)
                        
                     }/>))}
                </ul>
            </div>
        
        
    </div>)
}
export default Restmenu