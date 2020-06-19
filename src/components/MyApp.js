import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Form from './Form'
import TodoList from './TodoList'

const MyApp = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Todo
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Form />
      <TodoList />
    </Container>
  </>
)
export default MyApp
