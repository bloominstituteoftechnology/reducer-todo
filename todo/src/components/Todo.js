import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";

const newTodo = ''

export default function Todo() {





    return (<div>

        <AppBar position="sticky">
          <Toolbar color='inherit'>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <DehazeIcon />
            </IconButton>
            <h1>Pop Todo!</h1>
          </Toolbar>
        </AppBar>
        <form
          className="jumbotron bg-dark text-light flex-column d-flex"
          noValidate
          autoComplete="off"
          style={{position: 'sticky', top: '0'}}
        >
          <TextField id="outlined-basic" label="Enter Your todo" variant="outlined" style={{maxWidth: '20vw', backgroundColor: 'white', color: 'white'}}/>
          <Button variant="contained" color="primary" style={{maxWidth: '20vw'}} value={newTodo}>
            <h5>Click me!!</h5>
          </Button>
        </form>
        </div>)
}
