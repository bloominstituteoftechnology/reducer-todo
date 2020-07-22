import React from 'react';

const TodoForm = () => {

    // addTask = taskName => {
    //     setState({
    //         tasks: [
    //             ...tasks,
    //             {
    //                 item: taskName,
    //                 id: Date.now(),
    //                 completed: false
    //             }
    //         ]
    //     });
    // };

    return (
        <form>
            <input
                type='text'
                name='task'
                value=''>
            </input>
            <button>
                Add Task
            </button>
            <button>
                Clear Task(s)
            </button>
        </form>
    )
};

export default TodoForm;