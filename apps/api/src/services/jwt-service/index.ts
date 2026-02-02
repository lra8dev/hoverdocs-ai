import jwt from "jsonwebtoken";

import type { JwtPayload } from "@/types";

import { config } from "@/config/env-variable";

export class JwtService {
  private static readonly SECRET = config.JWT_SECRET;
  private static readonly EXPIRATION = "30d";

  public static sign(payload: JwtPayload): string {
    return jwt.sign(payload, JwtService.SECRET, {
      expiresIn: JwtService.EXPIRATION,
    });
  }

  public static verify(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, JwtService.SECRET) as JwtPayload;
    }
    catch {
      return null;
    }
  }
}
