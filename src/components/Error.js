import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError()
    return(<div className="error-main">
        <h1>error</h1>
        <h2>something is wrong</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>)
}
export default Error;