import { validationsResults } from '@middleware/validations.middleware';
import * as validators from '@validators/index';

export const createPost = [...validators.post, validationsResults()];

export const getPostById = [validators.postIdParam, validationsResults()];

export const deletePostById = [validators.postIdParam, validationsResults()];
