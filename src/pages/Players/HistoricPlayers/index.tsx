import { useState, ChangeEvent } from 'react';

import { FaSearch } from 'react-icons/fa';
import alto from '../../../assets/img/alto.png';
import baixo from '../../../assets/img/Baixo.png';
import medio from '../../../assets/img/medio.png';
import muitoAlto from '../../../assets/img/Muito-alto.png';
import muitoBaixo from '../../../assets/img/muito-baixo.png';

import { TableSportBookHistoricPlayer } from './TableSportBookHistoricPlayer';
import { TableCasinoHistoricPlayer } from './TableCasinoHistoricPlayer';
import { ButtonDefault } from '../../../components/ButtonDefault';
import { Visibility } from '../../../components/Visibility';
import { Spinner } from '../../../components/Spinner';
import { Summary } from '../../../components/Summary';

import {
  CasinoPlayersFilterProps,
  PlayerFilterHistoricProps,
  SportBookPlayersFilterProps,
  ValueFilterHistoricProps,
} from './interface';

import { getHistoricPlayer } from '../../../services/global/endPoints';

import { decimalToPercentage, formatCurrency } from '../../../utils/Formatter';
import { formatDate } from '../../../utils/Date';
import { validVariant } from '../../../utils/Validation';

import {
  ContainerHistoricSearch,
  ContentTableHistoricPlayer,
  FlexHistoricPlayer,
  ContentHistoricSearch,
  DivSpinnerHistoricSearch,
  TitleHistoricPlayer,
  InformationPlayerTitleHistoric,
  InputPlayerHistoric,
  InputPlayerHistoricSearch,
  DivSearchTitleHistoric,
  ContentInformationHistoricPlayer,
  ContentSummaryHistoricPlayer,
  Row,
  RiskPlayerTitleHistoric,
} from "./styles";

export function HistoricPlayer() {

  const [loading, setLoading] = useState<boolean>(false);
  const [idSearchPlayer, setIdSearchPlayer] = useState<string>("");

  const [playerFilterHistoric, setPlayerFilterHistoric] = useState<PlayerFilterHistoricProps>({
    name: "",
    btag: "",
    is_test_client: "",
    registration_date: "",
    profit: "R$ 0",
    risk_level: 0
  });

  const [valueFilterHistoric, setValueFilterHistoric] = useState<ValueFilterHistoricProps>({
    deposit: "R$ 0",
    whtidrawal: "R$ 0",
    totalCasino: "R$ 0",
    totalAposta: "R$ 0"
  });

  const [sportBookPlayersFilter, setSportBookPlayersFilter] = useState<SportBookPlayersFilterProps[]>([]);
  const [casinoPlayerFilter, setCasinoPlayerFilter] = useState<CasinoPlayersFilterProps[]>([]);

  const searchHistoricPlayer = () => {
    if (idSearchPlayer === "")
      return false;

    getLoadDataHistoricPlayer();
  };

  const getLoadDataHistoricPlayer = async () => {
    setSportBookPlayersFilter([]);
    setCasinoPlayerFilter([]);
    setLoading(true);

    getHistoricPlayer(idSearchPlayer).then(result => {

      console.log(result);
      if (result.data) {
        setPlayerFilterHistoric({
          name: result.data.playerFilter.name,
          btag: result.data.playerFilter.btag,
          is_test_client: result.data.playerFilter.is_test_client === 0 ? "Não" : "Sim",
          profit: formatCurrency(result.data.profit),
          registration_date: formatDate(result.data.playerFilter.registration_date),
          risk_level: result.data.risk_level
        });

        setValueFilterHistoric({
          deposit: formatCurrency(result.data.deposit),
          whtidrawal: formatCurrency(result.data.whtidrawal),
          totalCasino: formatCurrency(result.data.totalCasino),
          totalAposta: formatCurrency(result.data.totalAposta)
        });

        if (result.data.playerFilter.sportbooktplayers.length > 0) {
          result.data.playerFilter.sportbooktplayers.map((filter: any) => {

            const playerObj: SportBookPlayersFilterProps = {
              category: filter.category,
              tournament_name: filter.tournament_name,
              sport_name: filter.sport_name,
              date: formatDate(filter.date),
              turnover: formatCurrency(filter.turnover),
              gross_revenue: formatCurrency(filter.gross_revenue),
              payout: formatCurrency(filter.payout)
            };

            setSportBookPlayersFilter((prevData) => [...prevData, playerObj]);
          });
        }
        if (result.data.groupedByDayAndResultGame.length > 0) {
          result.data.groupedByDayAndResultGame.map((filter: any) => {

            const playerObj: CasinoPlayersFilterProps = {
              name: filter.resultgame.name,
              day: formatDate(filter.day),
              turnover: formatCurrency(filter.totalTurnover),
              winnings: formatCurrency(filter.totalWinnings),
              profit: formatCurrency(filter.profit),
              profitPercent: decimalToPercentage(filter.profitPercent)
            };

            setCasinoPlayerFilter((prevData) => [...prevData, playerObj]);
          });
        }

        setLoading(false);
      }
    });
  };

  const handleIdPlayer = (e: ChangeEvent<HTMLInputElement>) => {
    setIdSearchPlayer(e.target.value);
  };

  const riskPlayer = [alto, muitoAlto, medio, baixo, muitoBaixo];


  const colorByRisk = () => {
    if (playerFilterHistoric.risk_level === 0) {
      return "red";
    }

    if (playerFilterHistoric.risk_level === 2) {
      return "yellow";
    }

    if (playerFilterHistoric.risk_level === 4) {
      return "green";
    }

    return "white";
  };

  return (
    <ContainerHistoricSearch>
      <ContentHistoricSearch>

        <TitleHistoricPlayer>Filtros</TitleHistoricPlayer>

        <Visibility visible={loading}>
          <DivSpinnerHistoricSearch>
            <Spinner />
          </DivSpinnerHistoricSearch>
        </Visibility>

        <DivSearchTitleHistoric>
          <InputPlayerHistoricSearch
            type="text"
            id="id_player"
            name="id_player"
            value={idSearchPlayer}
            onChange={handleIdPlayer}
          />

          <ButtonDefault onClick={searchHistoricPlayer} disabled={idSearchPlayer === ""}>
            <FaSearch />
            Buscar
          </ButtonDefault>
        </DivSearchTitleHistoric>

        <Visibility visible={!!playerFilterHistoric.name}>
          <TitleHistoricPlayer>Históricos</TitleHistoricPlayer>

          <Row>
            <ContentInformationHistoricPlayer>
              <InformationPlayerTitleHistoric>
                <div>
                  <p>Nome Jogador</p>
                  <InputPlayerHistoric width={350}>
                    <span>{playerFilterHistoric.name}</span>
                  </InputPlayerHistoric>
                </div>
                <div>
                  <p>Data de Registro</p>
                  <InputPlayerHistoric width={120}>
                    <span> {playerFilterHistoric.registration_date} </span>
                  </InputPlayerHistoric>
                </div>
                <div>
                  <p>Conta Teste</p>
                  <InputPlayerHistoric width={100}>
                    <span>{playerFilterHistoric.is_test_client} </span>
                  </InputPlayerHistoric>
                </div>
              </InformationPlayerTitleHistoric>

              <InformationPlayerTitleHistoric>
                <div>
                  <p>Btag</p>
                  <InputPlayerHistoric width={"auto"}>
                    <span> {playerFilterHistoric.btag} </span>
                  </InputPlayerHistoric>
                </div>
                <div>
                  <p>Saldo na Carteira</p>
                  <InputPlayerHistoric width={200} variant={colorByRisk()}>
                    <span>{playerFilterHistoric.profit} </span>
                  </InputPlayerHistoric>
                </div>

              </InformationPlayerTitleHistoric>
            </ContentInformationHistoricPlayer>

            <RiskPlayerTitleHistoric>
              <img src={riskPlayer[playerFilterHistoric.risk_level]} />
            </RiskPlayerTitleHistoric>
          </Row>

          <ContentSummaryHistoricPlayer>
            <div>
              <p>Depósitos</p>
              <Summary
                variant={validVariant(valueFilterHistoric.deposit)}
                text=""
                value={valueFilterHistoric.deposit}
                isCenter
              />
            </div>

            <div>
              <p>Saques</p>
              <Summary
                variant="red"
                text=""
                value={valueFilterHistoric.whtidrawal}
                isCenter
              />
            </div>

            <div>
              <p>Cassino</p>
              <Summary
                variant={validVariant((valueFilterHistoric.totalCasino))}
                text=""
                value={valueFilterHistoric.totalCasino}
                isCenter
              />
            </div>

            <div>
              <p>Livros de esportes</p>
              <Summary
                variant={validVariant((valueFilterHistoric.totalAposta))}
                text=""
                value={valueFilterHistoric.totalAposta}
                isCenter
              />
            </div>
          </ContentSummaryHistoricPlayer>

          <FlexHistoricPlayer>
            <ContentTableHistoricPlayer>
              <p>Resultado de Cassino</p>

              <TableCasinoHistoricPlayer data={casinoPlayerFilter} />
            </ContentTableHistoricPlayer>
          </FlexHistoricPlayer>

          <FlexHistoricPlayer>
            <ContentTableHistoricPlayer>
              <p>Resultado por Jogo</p>

              <TableSportBookHistoricPlayer data={sportBookPlayersFilter} />
            </ContentTableHistoricPlayer>
          </FlexHistoricPlayer>
        </Visibility>
      </ContentHistoricSearch>
    </ContainerHistoricSearch>

  );
}
