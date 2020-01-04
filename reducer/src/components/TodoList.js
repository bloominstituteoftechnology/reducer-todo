import React from 'react'
import { Todo } from './Todo'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';





export function TodoList(props) {
    
    return (
        <List >

        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
             <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={props.state.map((item) => {
                return <Todo 
                item={item} 
                key={item.id} 
                handleComplete={props.handleComplete}
                />
            })} />

            
        </ListItem>
        );
      })}
    </List>
  );
}