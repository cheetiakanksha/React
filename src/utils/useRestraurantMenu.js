import {useEffect, useState} from "react";
import { MENU_URL } from "./constants";
const useRestraurantMenu=(resId)=>{
    const [restMenu, setRestMenu]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const data= await fetch(MENU_URL+resId);
        const json=await data.json();
        setRestMenu(json?.data);
    }
    return restMenu;
}
export default useRestraurantMenu;