import type { NextFunction, Request, Response } from "express";

import { ApiError } from "@/lib/api-error";
import { JwtService } from "@/services/jwt-service";

export function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError("No token provided", 401);
  }

  const token = authHeader.slice(7);
  const payload = JwtService.verify(token);

  if (!payload) {
    throw new ApiError("Invalid or expired token", 401);
  }

  req.userId = payload.userId;

  next();
}
