import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch =useDispatch()
    handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    return (
    <div className="bg-gray-100">
        {items.map(item=><div key={item.card.info.id}className="p-2 m-2 border-b-2 text-left flex justify-between ">
            <div className="w-9/12">
                <div className="py-2">
                    <span className="font-bold">{item.card.info.name}</span>
                    <span> Rs - {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                </div>
                <p className="font-light">{item.card.info.description}</p> 
            </div>
            <div className="w-3/12 p-2 flex flex-col items-center relative">
            
            <img src={CDN_URL+ item.card.info.imageId} className="w-full h-24" ></img>
            <button className="bg-black px-2 text-white absolute bottom-0 rounded-md " onClick={()=>handleAddItem(item)}>Add</button>
            </div>
        </div>)}
       
    </div>)
}
export default ItemList