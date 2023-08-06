import { SummaryProps } from "./interface";
import { SummaryCard } from "./styles";

export function Summary(props: SummaryProps) {

  const { variant = "blue", text, value, Icon, isCenter } = props;

  const haveIcon = Boolean(Icon);

  return (
    <SummaryCard variant={variant} isIcon={haveIcon} isCenter={isCenter}>
      <header>
        <span>{text}</span>
        {Icon && <>{Icon}</>}
      </header>
      <strong title={value.toString()}>{value}</strong>
    </SummaryCard>
  );
}