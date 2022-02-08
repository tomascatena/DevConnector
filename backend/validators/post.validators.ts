import { check, param } from 'express-validator';

export const postIdParam = param('postId', 'postId is required')
  .isMongoId()
  .withMessage('Invalid postId')
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
    .optional({ nullable: true })
    .notEmpty()
    .isDate()
    .withMessage('Invalid post field: date'),
];

export const comment = [
  check('comment', 'comment is required')
    .isArray()
    .custom((value) => value.length)
    .withMessage('Invalid comment'),
  check('comment.*.text', 'text is required')
    .isString()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Invalid comment field: text'),
  check('comment.*.date', 'date is required')
    .notEmpty()
    .isDate()
    .withMessage('Invalid comment field: date'),
];
