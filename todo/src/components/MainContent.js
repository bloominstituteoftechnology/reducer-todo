import "../css/index.css";

// import our reducers
import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

function useReducerHook(){
    let state = useReducer(todoReducer, initialState);
    return state;
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            myState: useReducerHook()
        }

        //this.state = useReducer(todoReducer, initialState);
        //[newTodo, setNewTodo] = useState("");
        //[state, dispatch] = useReducer(todoReducer, initialState);
        
    }

    

    handleChanges = e => {
        this.setNewTodo(e.target.value);
      };

    render() {
        return (
            <div className="main-content">Hello world</div>               
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }


}

export default MainContent;