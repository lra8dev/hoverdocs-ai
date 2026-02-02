import { window } from "vscode";

export class Toast {
  public static info(message: string): void {
    window.showInformationMessage(`HoverExplain: ${message}`);
  }

  public static warn(message: string): void {
    window.showWarningMessage(`HoverExplain: ${message}`);
  }

  public static error(message: string): void {
    window.showErrorMessage(`HoverExplain: ${message}`);
  }
}
