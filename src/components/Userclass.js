import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
        console.log("children constructor");
    }
    componentDidMount(){
        console.log("childern mounted");
    }
    render(){
        console.log("childern rendered");
        const {count}=this.state;
        return (
            <div className="user-class-card">
                <h3>{this.props.name}</h3>
                <h3>{count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count increase</button>
            </div>
        )
    }
}
export default Userclass;