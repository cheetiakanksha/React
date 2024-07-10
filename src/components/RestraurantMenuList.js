import ItemList from "./ItemList";
import {useState} from "react";
const RestraurantMenuList=({data,showItems,setShowIndex})=>{

   const handleClick=()=>{
    setShowIndex();
   }
    return(
        <div className="p-4 my-4 w-6/12 mx-auto justify-center shadow-lg ">
            <div className="items-center flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-extrabold">{data?.title}</span>
            <span>🔽</span>
            </div>
            
            <div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestraurantMenuList;