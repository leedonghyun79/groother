import { Router } from 'express';
import { RecruitsController } from './recruits.controller.js';
import { CreateRecruitsSchema } from './recruits.schema.js';
import { validateBody } from '../../lib/validate.js'

const recruitsController = new RecruitsController();
export const recruitsRouter = Router();

recruitsRouter.post('/', validateBody(CreateRecruitsSchema), recruitsController.createRecruits);
// recruitsRouter.get('/', recruitsController.getPosts);
// recruitsRouter.get('/:id', recruitsController.getPostById);
// recruitsRouter.put('/:id', validateBody(CreatePostSchema), recruitsController.updatePost);
// recruitsRouter.delete('/:id', recruitsController.deletePost);
