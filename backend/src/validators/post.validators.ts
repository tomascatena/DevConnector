import { check, param } from 'express-validator';

export const postIdParam = param('postId', 'postId is required')
  .isMongoId()
  .withMessage('Invalid postId')
  .escape();

export const commentIdParam = param('commentId', 'commentId is required')
  .isMongoId()
  .withMessage('Invalid commentId')
  .escape();

export const post = [
  check('post', 'post is required')
    .isObject()
    .custom((value) => Object.keys(value).length)
    .withMessage('Invalid post'),
  check('post.text', 'text is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid post field: text'),
  check('post.date', 'date is required')
    .optional({ nullable: true, checkFalsy: true })
    .notEmpty()
    .isISO8601()
    .withMessage('Invalid post field: date'),
];

export const comment = [
  check('comment', 'comment is required')
    .isObject()
    .custom((value) => Object.keys(value).length)
    .withMessage('Invalid comment'),
  check('comment.text', 'text is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid comment field: text'),
];
