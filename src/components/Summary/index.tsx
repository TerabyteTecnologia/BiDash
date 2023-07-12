import { SummaryProps } from "./interface";
import { SummaryCard } from "./styles";

export function Summary(props: SummaryProps) {

  const { variant, text, value, Icon } = props;

  return (
    <SummaryCard variant={variant}>
      <header>
        <span>{text}</span>
        {Icon}
      </header>

      <strong>{value}</strong>
    </SummaryCard>
  );
}