import React from 'react';

function TodoTable(props){
    const {todoTableRows} = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Incomplete</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                {todoTableRows(false)}
            </tbody>
        </table>
    )
}

export default TodoTable;