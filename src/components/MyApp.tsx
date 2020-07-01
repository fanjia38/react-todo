import * as React from 'react'
import {AppBar, Toolbar, Typography, Container, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Form from './Form'
import TodoList from './TodoList'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const MyApp: React.FC = (): React.ReactElement => {
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
