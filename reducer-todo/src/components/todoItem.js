import React from 'react';

export const TodoItem = props => {

    let className = "task ";
    const handleCompletedToggle = () => {

      props.toggleCompleted(props.item);
    }
    if (props.item.completed) {
      className += "task-completed";
    }
    return (
      <>
        <p className={className} onClick={handleCompletedToggle}>
          {props.item.item}
        </p>
      </>
    );

}