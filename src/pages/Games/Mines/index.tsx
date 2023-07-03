import { ScoreGame } from "../../../components/ScoreGame";
import { GameMines } from "../../../components/Games/Mines";

import { IoClose } from "react-icons/io5";

import { ContainerMines } from "./styles";
import { useNavigate } from "react-router-dom";

export function Mines() {

  const exampleReturnGeneratedMines: any =
  {
    "qtd_minas": 3,
    "entradas": [
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0
    ]
  };

  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate("/");
  };

  return (
    <ContainerMines>
      <header>
        <h1>Mines</h1>

        <a role="button" onClick={() => handleRedirectHome()}> <IoClose /></a>
      </header>
      <ScoreGame />

      <GameMines data={exampleReturnGeneratedMines} />

    </ContainerMines >
  );
}