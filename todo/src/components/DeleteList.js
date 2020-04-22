import React from 'react'
import { Button } from "semantic-ui-react";

function DeleteList({deleteAll}){
    return(
        <Button
            color="red"
            onClick={deleteAll}
            style={{marginTop:"8px"}}
        >Clear List</Button>
    )
}

export default DeleteList