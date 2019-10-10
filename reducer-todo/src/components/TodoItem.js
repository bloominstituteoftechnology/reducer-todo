import react from 'react';

const TodoItem = props => {
    const toggleItem = () => {
        props.toggleItem(props.item.id);
    };
    return (
        <div>
            <div onClick={toggleItem}>{props.item.item}</div>
        </div>
    )
}
export default TodoItem;