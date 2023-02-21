import { authMiddleware } from './auth'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

describe('authMiddleware', () => {

  it('should call next if token is valid', () => {
    // Arrange
    const userId = '123'
    const token = sign({ id: userId }, 'secretToken')
    const request = {
      headers: {
        authorization: `Bearer ${token}`
      }
    } as Request
    const response = {} as Response
    const next = jest.fn()

    // Act
    authMiddleware(request, response, next)

    // Assert
    expect(request.userId).toBe(userId)
    expect(next).toHaveBeenCalled()
  })

  it('should return 401 if no authorization header is provided', () => {
    // Arrange
    const request = {} as Request
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response
    const next = jest.fn()

   // Act
    try {
      authMiddleware(request, response, next)

    } catch (error) {
      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json).toHaveBeenCalledWith({ message: 'not authorization!' })
      expect(next).not.toHaveBeenCalled()      
    }
    // Assert
  })
})