import type { NextFunction, Request, Response } from "express";

import type { AsyncMiddleware } from "@/types";

export function asyncHandler(handler: AsyncMiddleware) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}
