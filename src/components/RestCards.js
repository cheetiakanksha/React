import { CDN_URL } from "../utils/constants";
import Restmenu from   "./Restmenu";
const RestCards =(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    return (<div className="w-[300px] h-[350px] border border-gray-200 rounded-2xl  shadow-md m-4 p-4 hover:bg-red-100">
        <div className="rest-card-img">
            <img alt="rest photo"src={CDN_URL+resData.info.cloudinaryImageId} className="w-[300px] h-[200px] rounded-lg"></img>
        </div>
        <div className="w-[250px] ">
            <h4 className="font-bold my-0.5 py-0.5">{name}</h4>
            <h5 className="whitespace-normal ">{cuisines.join(", ")}</h5>
            <h6 className="font-extralight py-0.5 text-sm">⭐️ {avgRating} Rating</h6>
        </div>
        </div>
    )
};
export const UpadtedPromotedLabel=(Resmenu)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute m-2 p-2 ">promoted</label>
                <RestCards {...props}/>
            </div>
        ) 

    }
}
export default RestCards;