import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IToken {
  id: string
  iat?: number
  expired?: number
}

export function authMiddleware(request: Request, response: Response, next: NextFunction) {
  try {
    const { authorization } = request.headers
    if(!authorization) return response.status(401).json({message: 'not authorization!'})
  
    const token = authorization.replace('Bearer', '').trim()
    const isValid = verify(token,'secretToken')
    const { id } = isValid as IToken
    request.userId = id 

    return next()
  } catch (error:any) {
    return response.status(401).json({message: error.message})
  }
}