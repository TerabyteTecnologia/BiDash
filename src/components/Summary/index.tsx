import { TiGroup } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant="blue">
        <header>
          <span>Total de jogadores</span>
          <TiGroup size={32} color="#229ED9" />
        </header>

        <strong>260.000</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Jogadores Ativos</span>
          <BsCheckCircle size={32} color="#448919" />
        </header>

        <strong>14.000</strong>
      </SummaryCard>

      <SummaryCard variant="red">
        <header>
          <span>Jogadores Inativos </span>
          <AiOutlineCloseCircle size={32} color="#B20D0D" />
        </header>

        <strong>246.000</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}