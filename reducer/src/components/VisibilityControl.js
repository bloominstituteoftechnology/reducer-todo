import React from 'react';

function VisibiltyControl(props){
    const {isChecked, callback, description} = props;


    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={e => {
                callback(e.target.checked)
            }}/>
            <label>Show {description}</label>
        </div>
    )
}

export default VisibiltyControl;