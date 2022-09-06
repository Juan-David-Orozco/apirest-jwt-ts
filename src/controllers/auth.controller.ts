import { Request, Response } from "express"
import User, { IUser } from '../models/User'
import jwt from 'jsonwebtoken'

export const signup = async (req: Request, res: Response) => {
  try {
    // user
    const user: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    user.password = await user.encryptPassword(user.password)
    const savedUser = await user.save()
    // token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest')
    res.header('auth-token', token).json(savedUser)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

export const signin = async (req: Request, res: Response) => {
  try {
    // validate user by email
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).json("Email or password is wrong")
    // validate password
    const correctPassword: boolean = await user.validatePassword(req.body.password)
    if (!correctPassword) return res.status(400).json("Invalid password")
    // generate token
    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest', {
      expiresIn: 60 * 60 * 24 // se expresa en segundo, el resultado equivale a 1 dia
    })
    res.header('auth-token', token).json(user)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

export const profile = async (req: Request, res: Response) => {
  //console.log(req.header('auth-token'))
  const user = await User.findById(req.userId, { password: 0 })
  if (!user) return res.status(404).json("User not found")
  res.json(user)
}

export const testing = async (req: Request, res: Response) => {
  res.json("private")
}