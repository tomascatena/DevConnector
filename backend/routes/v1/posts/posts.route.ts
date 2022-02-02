import express, { Router } from 'express';
import httpStatus from 'http-status-codes';

const router = Router();

// @route     GET api/v1/posts
// @desc      Test route
// @access    Public
router.get('/', (req, res) => {
  res.status(httpStatus.OK).json('Posts route');
});

export default router;
