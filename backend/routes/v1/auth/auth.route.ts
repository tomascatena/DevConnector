import express, { Router } from 'express';
import httpStatus from 'http-status-codes';

const router = Router();

// @route     GET api/v1/auth
// @desc      Test route
// @access    Public
router.get('/', (req, res) => {
  res.status(httpStatus.OK).json('Auth route');
});

export default router;
