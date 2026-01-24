import type { NextFunction, Request, Response } from "express";

type ResponseData<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type ExpRequest<T = any> = {} & Request<object, object, T>;
export type ExpResponse<T = any> = {} & Response<ResponseData<T>>;

export type AppError = {
  statusCode?: number;
  isOperational?: boolean;
} & Error;

export type AsyncMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;
