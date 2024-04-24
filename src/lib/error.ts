type CustomError = {
  status: number,
  message: string,
  cat: string
}

export type ErrorResponse = {
  error: CustomError
}
