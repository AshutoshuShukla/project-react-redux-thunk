import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function CheckboxList({data}) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log(data)
  return (
    <List sx={{ width: '100%', maxWidth: 1800, bgcolor: '##afeeee', justifyContent:"center"}}>
      {/* {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`; */}

       { data.map((todo)=>{
            console.log(todo)
     
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todo.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': todo.id }}
                />
              </ListItemIcon>
              <ListItemText id={todo.id} primary={todo.title} />
            </ListItemButton>
          </ListItem>
        );
    })}  
      {/* })} */}
    </List>
  );
}
