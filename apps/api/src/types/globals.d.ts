/// <reference types="@clerk/express/env" />

declare global {
  namespace Express {
    type AuthObject = {
      userId?: string;
    };
  }
}

export {};
