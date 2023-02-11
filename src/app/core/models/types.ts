export interface AlertState {
  type: AlertType | null;
  message: string;
}

export enum AlertType {
  Success,
  Warning,
  Error
}
