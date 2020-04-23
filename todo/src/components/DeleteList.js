import React from 'react'
import { Button } from "semantic-ui-react";

function DeleteList({deleteAll}){
    return(
        <Button
            color="red"
            onClick={deleteAll}
            style={{marginTop:"8px"}}
            className="shake-clunk"
        >Clear List</Button>
    )
}

export default DeleteList