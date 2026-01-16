import { config } from "@hoverdocs/utils";
import jwt from "jsonwebtoken";

export type JwtPayload = {
  userId: string;
  sessionId: string;
};

export class JwtService {
  private static readonly SECRET = config.JWT_SECRET;
  private static readonly EXPIRATION = "30d";

  /**
   * Generate a long-lived JWT for the extension
   */
  public static sign(payload: JwtPayload): string {
    return jwt.sign(payload, JwtService.SECRET, {
      expiresIn: JwtService.EXPIRATION,
    });
  }

  /**
   * Verify and decode a JWT
   */
  public static verify(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, JwtService.SECRET) as JwtPayload;
    }
    catch {
      return null;
    }
  }
}
