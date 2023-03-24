import { AppError } from "./AppError";
import { StatusCodes } from './helpers/httpStatusCode'

export class InternalServerError extends AppError {
  constructor(message:string='Internal server error', statusCode:StatusCodes=StatusCodes.INTERNAL_SERVER_ERROR){
    super(message, statusCode)
  }
}