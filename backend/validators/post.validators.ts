import { check } from 'express-validator';

export const postValidator = [
  check('post', 'post is required')
    .isObject()
    .custom((post) => Object.keys(post).length)
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

export const commentValidator = [
  check('comment', 'comment is required')
    .isArray()
    .custom((comment) => comment.length)
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
