import express from 'express'
import { loginUser,registerUser,adminLogin, checkMembershipStatus } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.get('/membership-status')

export default userRouter