export interface SummaryProps {
  variant: "green" | "blue" | "red";
  text: string;
  value: number | string;
  Icon?: React.ReactNode;
  isCenter?: boolean;
}