import type * as vscode from "vscode";

export function getLineText(document: vscode.TextDocument, lineNumber: number): string {
  if (lineNumber < 0 || lineNumber >= document.lineCount) {
    return "";
  }

  return document.lineAt(lineNumber).text.trim();
}
