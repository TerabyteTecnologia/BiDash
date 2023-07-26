import { SummaryProps } from "./interface";
import { SummaryCard } from "./styles";

export function Summary(props: SummaryProps) {

  const { variant, text, value, Icon } = props;

  const haveIcon = Boolean(Icon);

  return (
    <SummaryCard variant={variant} isIcon={haveIcon}>
      <header>
        <span>{text}</span>
        {Icon && <>{Icon}</>}
      </header>
      <strong title={value.toString()}>{value}</strong>
    </SummaryCard>
  );
}