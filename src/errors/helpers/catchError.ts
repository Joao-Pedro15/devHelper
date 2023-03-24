import { InternalServerError } from "../InternalServerError";
import { NotFoundError } from "../NotFoundError";

export function catchError(error:any) {
  if(error instanceof NotFoundError) {
    throw new NotFoundError(error.item, error.message, error.statusCode)
  }
  throw new InternalServerError()
}