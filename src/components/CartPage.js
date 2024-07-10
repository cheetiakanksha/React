import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const CartPage=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch()
    handleRemove=()=>{
        dispatch(clearCart())
    }
    return(
        <div className=" items-center justify-center">
            <div className="w-6/12 mx-auto bg-gray-200 text-center border-gray border-1 flex justify-between shadow-2xl p-4 m-4 rounded-lg">
       
                <h1 className="font-bold">cart</h1> 
                <button className="bg-black text-white rounded-lg mx-2 px-2" onClick={handleRemove}>clear cart</button>
            </div >
            <div className="w-6/12 mx-auto text-center border-gray border-1 flex justify-between shadow-2xl p-4 m-4 ">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default CartPage;