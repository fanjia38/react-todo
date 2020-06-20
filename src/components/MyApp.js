import * as React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import Form from './Form'
import TodoList from './TodoList'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const MyApp = () => {
  const classes = useStyles();

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Todo
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="xs">
      <Form />
      <Divider className={classes.divider}/>
      <TodoList />
    </Container>
  </>

  )
}

export default MyApp
