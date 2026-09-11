export type AlertType = "success" | "error" | "loading" | null;

interface AlertProps {
  type: AlertType;
  title?: string;
  subtitle: string;
  close: () => void;
}

export default AlertProps;
