import express from 'express'

import { getPosts } from '../controllers/posts.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.send('This works!');    
});


export default router;
