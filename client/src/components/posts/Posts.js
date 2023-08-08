//eslint-disable-next-line
import React from 'react'

import { useSelector } from 'react-redux';


import Post from './post/post';

import useStyles from './styles.posts'

const Posts = () => {
  //eslint-disable-next-line
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  )
}

export default Posts
