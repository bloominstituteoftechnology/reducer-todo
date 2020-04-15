import React from 'react';

function AddTodo(props) {
    console.log(props);
    props.state.tasks.map((itemInfo) => console.log(itemInfo.item));

    const [state, setState] = useState({
        name: '',
        completed: false,
        id: Math.random() * 999999,
    });
    const handleChanges = (event) => {
        event.preventDefault();
        setState(event.target.value);
    };
    return (
        <section>
            {props.state.tasks.map((itemInfo) => (
                <h4 key={itemInfo.id} onClick={}>
                    {itemInfo.item}
                </h4>
            ))}
        </section>
    );
}

export default AddTodo;
