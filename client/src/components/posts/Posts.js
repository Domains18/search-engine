//eslint-disable-next-line
import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Post from './post/post';

import useStyles from './styles.posts'

const Posts = () => {
  //eslint-disable-next-line
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  // console.log(posts);
  return (
    <>
      {!posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Posts
