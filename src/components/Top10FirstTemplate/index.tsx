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

export const Top10FirstTemplateComponent = () => {

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
            <RowTitlePlayerFirstTemplate>
              <img src={top1} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top2} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top3} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top4} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top5} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
          </ColumnTitlePlayerFirstTemplate>

          <ColumnTitlePlayerFirstTemplate>
            <span>404</span>
            <span>380</span>
            <span>366</span>
            <span>240</span>
            <span>200</span>
          </ColumnTitlePlayerFirstTemplate>
        </ContentFirstTemplate>

        <ContentFirstTemplate>
          <ColumnTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top6} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top7} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top8} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top9} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>
            <RowTitlePlayerFirstTemplate>
              <img src={top10} />
              <span>Nome do jogo</span>
            </RowTitlePlayerFirstTemplate>

          </ColumnTitlePlayerFirstTemplate>

          <ColumnTitlePlayerFirstTemplate>
            <span>98</span>
            <span>80</span>
            <span>63</span>
            <span>28</span>
            <span>21</span>
          </ColumnTitlePlayerFirstTemplate>
        </ContentFirstTemplate>


      </BodyFistTemplate>
    </BackgroundFirstTemplate>
  );
};