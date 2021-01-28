
import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: "",
        };
    }

    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = (e) => {
        e.preventDefault();
        this.setState({ item: "", id: Date.now(), completed: false });
        this.props.addItem(e, this.state.item);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        value={this.state.item}
                        name="item"
                        onChange={this.handleChanges}
                    />
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}
export default TodoForm;