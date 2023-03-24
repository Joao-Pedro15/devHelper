import { AppError } from "./AppError";
import { StatusCodes } from './helpers/httpStatusCode'

export class NotFoundError extends AppError {
  public readonly item: string
  constructor(item:string, message: string=`Not found ${item}`, statusCode:StatusCodes=StatusCodes.NOT_FOUND){
    super(message, statusCode)
    this.item = item
  }
}