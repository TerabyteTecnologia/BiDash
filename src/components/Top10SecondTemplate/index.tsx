import { formatCurrency } from '../../utils/Formatter';
import { Top10SecondTemplateProps } from './interface';

import {
  BackgroundFirstTemplate,
  BodyFistTemplate,
  ContentSecondTemplate,
  TitleFirstTemplate
} from "./styles";

export const Top10SecondTemplateComponent = (props: Top10SecondTemplateProps) => {

  const { IconTitle, title, data } = props;

  return (
    <BackgroundFirstTemplate>
      <TitleFirstTemplate>
        {IconTitle && <>{IconTitle}</>}
        <p>{title}</p>
        {IconTitle && <>{IconTitle}</>}
      </TitleFirstTemplate>

      <BodyFistTemplate>

        {data?.slice(0, 5).map((game: any) => (
          <ContentSecondTemplate>
            <span>{game.jogo}</span>
            <span>  {formatCurrency(game.resultado as number)}</span>
          </ContentSecondTemplate>
        ))}
      </BodyFistTemplate>
    </BackgroundFirstTemplate>
  );
};