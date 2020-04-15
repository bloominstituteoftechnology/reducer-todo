import React from 'react';

export default function TodoList(props) {
    console.log(props);
    props.state.tasks.map((itemInfo) => console.log(itemInfo));

    return (
        <section>
            {props.state.tasks.map((itemInfo) => (
                <h4
                    onClick={() => {
                        props.toggleItem(itemInfo.id);
                    }}
                    key={itemInfo.id}
                    style={{
                        textDecoration: itemInfo.completed
                            ? 'line-through'
                            : 'none',
                    }}
                >
                    {itemInfo.item}
                </h4>
            ))}
        </section>
    );
}
