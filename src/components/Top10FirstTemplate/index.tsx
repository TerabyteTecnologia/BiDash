import top1 from '../../assets/img/top1.png';
import top2 from '../../assets/img/top2.png';
import top3 from '../../assets/img/top3.png';
import top4 from '../../assets/img/top4.png';
import top5 from '../../assets/img/top5.png';
import top6 from '../../assets/img/top6.png';
import top7 from '../../assets/img/top7.png';
import top8 from '../../assets/img/top8.png';
import top9 from '../../assets/img/top9.png';
import top10 from '../../assets/img/top10.png';
import trofeu from '../../assets/img/trofeu.png';

import {
  BackgroundFirstTemplate,
  BodyFistTemplate,
  ColumnTitlePlayerFirstTemplate,
  ContentFirstTemplate,
  RowTitlePlayerFirstTemplate,
  TitleFirstTemplate
} from "./styles";

import { PopularGamesProps } from '../../pages/SportsBooks/interface';

interface Top10PopularGame {
  data?: PopularGamesProps[];
}

export const Top10FirstTemplateComponent = (props: Top10PopularGame) => {

  const { data } = props;

  const topImagesFirstPart = [top1, top2, top3, top4, top5];
  const topImagesSecondPart = [top6, top7, top8, top9, top10];

  return (
    <BackgroundFirstTemplate>
      <TitleFirstTemplate>
        <img src={trofeu} />
        <p>Top 10 Mais Polulares</p>
        <img src={trofeu} />
      </TitleFirstTemplate>

      <BodyFistTemplate>

        <ContentFirstTemplate>
          <ColumnTitlePlayerFirstTemplate>

            {data?.slice(0, 5).map((game: any, index: number) => (
              <RowTitlePlayerFirstTemplate>
                <img src={topImagesFirstPart[index]} />
                <span>{game.jogo}</span>
              </RowTitlePlayerFirstTemplate>
            ))}

          </ColumnTitlePlayerFirstTemplate>

          <ColumnTitlePlayerFirstTemplate>
            {data?.slice(0, 5).map((game: any) => (
              <span>{game.quantidade}</span>
            ))}
          </ColumnTitlePlayerFirstTemplate>
        </ContentFirstTemplate>

        <ContentFirstTemplate>
          <ColumnTitlePlayerFirstTemplate>
            {data?.slice(5, 10).map((game: any, index: number) => (
              <RowTitlePlayerFirstTemplate>
                <img src={topImagesSecondPart[index]} />
                <span>{game.jogo}</span>
              </RowTitlePlayerFirstTemplate>
            ))}

          </ColumnTitlePlayerFirstTemplate>

          <ColumnTitlePlayerFirstTemplate>
            {data?.slice(5, 10).map((game) => (
              <span>{game.quantidade}</span>
            ))}
          </ColumnTitlePlayerFirstTemplate>
        </ContentFirstTemplate>

      </BodyFistTemplate>
    </BackgroundFirstTemplate>
  );
};