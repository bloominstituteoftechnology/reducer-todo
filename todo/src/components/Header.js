import React from "react";
import "../css/index.css";

class Header extends React.Component {
    constructor(props) {
        super(props);

       
    }
    render() {
        return (
            
                <header>
                    <h1>Lambda Todo List</h1>
                    
                    <div className="right-image">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbzzsxz6liz-flywheel.netdna-ssl.com%2Fwp-content%2Fuploads%2F2019%2F05%2FLambda_Logo-1-200x56.png&f=1&nofb=1" alt="Lambda image" />
                    </div>
                </header>
            
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }


}

export default Header;