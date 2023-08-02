import { Router } from 'express';
const router = Router();

import { TokenValidation } from '../libs/verifyToken'
import { signin, signup, profile, testing } from '../controllers/auth.controller'

router.post('/signup', signup)
router.post('/signin', signin)
router.get(
  '/profile', 
  TokenValidation ,
  profile)

router.get('/testing', TokenValidation ,testing)

export default router;