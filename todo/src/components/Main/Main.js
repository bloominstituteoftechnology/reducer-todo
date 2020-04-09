import React from 'react';
import Stats from './Stats/Stats';
import './scss/main.scss';

function Main(props) {
    return (
    <div className="main">
        <Stats state={props.state}/>
    </div>
    );
}

export default Main;