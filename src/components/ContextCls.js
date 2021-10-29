import React, { Component } from "react";
import { UserContext } from "../contexts/userContext";
class ContextClass extends Component{
    static contextType = UserContext;
    render(){
        return(
            <>
            <h1>Context class Example</h1>
            {
                this.context && this.context.map((ele,ind)=>{
                    return <img src={ele.thumbnailUrl} alt='images'/>
                })
            }
            </>
        )
    }
}
//ContextClass.contextType = UserContext;
export default ContextClass