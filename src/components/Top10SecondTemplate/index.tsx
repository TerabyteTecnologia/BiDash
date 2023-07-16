import { Top10SecondTemplateProps } from './interface';

import {
  BackgroundFirstTemplate,
  BodyFistTemplate,
  ContentSecondTemplate,
  TitleFirstTemplate
} from "./styles";

export const Top10SecondTemplateComponent = (props: Top10SecondTemplateProps) => {

  const { IconTitle, title } = props;

  return (
    <BackgroundFirstTemplate>
      <TitleFirstTemplate>
        {IconTitle && <>{IconTitle}</>}
        <p>{title}</p>
        {IconTitle && <>{IconTitle}</>}
      </TitleFirstTemplate>

      <BodyFistTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 10.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

        <ContentSecondTemplate>
          <span>Nome do jogo</span>
          <span>   R$ 12.003,00</span>
        </ContentSecondTemplate>

      </BodyFistTemplate>
    </BackgroundFirstTemplate>
  );
};