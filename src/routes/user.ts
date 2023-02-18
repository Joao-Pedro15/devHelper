import { Router, Request, Response } from 'express'
import { authMiddleware } from '../middlewares/auth'
import { sign } from 'jsonwebtoken'

const router = Router()

type ILogin =  {
  email: string
  password: string
}

const users = [
  {username: 'alonedw', password: 'nonpassword'},
  {username: 'rockabillyboy', password: 'loremIpsum'}
]

router.post('/login', async (request: Request, response: Response) => {
  const { email, password } : ILogin = request.body
  try {
    // if(!username.trim() || !password.trim()) throw new Error('username and password not empty!')
    const token = sign({ user: email }, 'secretToken', { expiresIn: "1h" })
    return response.status(200).json({ user: users[0], token })
  } catch (error:any) {    
    return response.status(error.statusCode).json({message: error.message})
  }
})


router.get('/allUsers', authMiddleware, async (request: Request, response: Response) => {
  try {
    return response.status(200).json(users[0])
  } catch (error:any) {
    return response.status(error.statusCode).json({message: error.message})
  }
})

export default router