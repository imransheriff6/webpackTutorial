import React, { Component, createRef } from "react";
import bg from "../bg2.jpg";
import {addTodo,toggleTodo,consoleLog}  from '../redux/todo/action'
import {fetchingData} from '../redux/fetchingData/action'
import { connect } from "react-redux";
class ExampleOne extends Component{
    inputRef = createRef();
    addNew = () =>{
        let input_value = this.inputRef.current;
        if(input_value.value == '' || input_value.value == ' '){
            input_value.focus()
        }else{
            this.props.add({
                id:this.props.Todo?this.props.Todo.todos.length+1:1,
                name:input_value.value,
                status:'INCOMPLETE'
            });
            input_value.value = '';
            input_value.focus()
        }
    }
    componentDidMount(){
        this.props.fetching();
    }
    render(){
        const check = consoleLog(this.props.Todo);
        const Fetch = this.props.Fetch
        return(
            <>
            <h1>Webpack tutorial..........</h1>
            <div style={{width:'35%',float:"left"}}> 
            <input ref={this.inputRef} type='text' id='textinput_1'></input>
            <button onClick={this.addNew.bind(this)}>Add</button>
            
            {
                check && check.todos.map((activities) =>{
                    return <p key={activities.id}>{activities.name}</p>
                })
            }
            </div>
            <div id='data-div'>
            {
                Fetch.loading && <p>Loading....</p>
            }
            {
                Fetch.data && Fetch.data.map((todo,ind)=>{
                    return <h3> * {todo.title}</h3>
                })
            }
            </div>
            </>
        ) 
    }
}
const mapStateToProps = (state) =>{
    return{
        Todo:state.todoReducer,
        Fetch:state.fetchDataReducer
    }
}
const mapStateToDispatch = (dispatch) =>{
    return{
        add:(data)=>dispatch(addTodo(data)),
        toggle:(id)=>dispatch(toggleTodo(id)),
        fetching:()=>dispatch(fetchingData())
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ExampleOne);