import { StatusCodes } from "./helpers/httpStatusCode"

export class AppError extends Error {
  public readonly statusCode: number
  constructor(message: string, statusCode: StatusCodes=StatusCodes.BAD_REQUEST) {
    super(message)
    this.statusCode = statusCode
  }
}