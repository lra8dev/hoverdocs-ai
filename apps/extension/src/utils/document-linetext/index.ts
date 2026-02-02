import type { TextDocument } from "vscode";

export function getLineText(document: TextDocument, lineNumber: number): string {
  if (lineNumber < 0 || lineNumber >= document.lineCount) {
    return "";
  }

  return document.lineAt(lineNumber).text.trim();
}
