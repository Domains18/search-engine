//eslint-disable-next-line
import React,{useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import { useDispatch } from 'react-redux';

import './index.css'
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
// import memories from './images/memories.png'
import useStyles from './styles.app'
import { getPosts } from './actions/Post'



const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar} >
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        {/* <img src={memories} alt="memories" height="60" className={classes.image} /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
