import { Router } from 'express';
import httpStatus from 'http-status-codes';

const router = Router();

// @route     GET api/v1/users
// @desc      Test route
// @access    Public
router.get('/', (req, res) => {
  res.status(httpStatus.OK).json('User route');
});

export default router;
