import { ScoreGame } from "../../../components/ScoreGame";
import { GameMines } from "../../../components/Games/Mines";

import { IoClose } from "react-icons/io5";

import { ContainerGoal } from "./styles";
import { useNavigate } from "react-router-dom";
import { GameGoal } from "../../../components/Games/Goal";

export function Goal() {

  const exampleReturnGeneratedGoal: any =
  {
    "qtd_goal": 3,
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
      0,
      1,
      0,
      0
    ]
  };

  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate("/");
  };

  return (
    <ContainerGoal>
      <header>
        <h1>Goal</h1>

        <a role="button" onClick={() => handleRedirectHome()}> <IoClose /></a>
      </header>
      <ScoreGame />

      <GameGoal data={exampleReturnGeneratedGoal} />

    </ContainerGoal >
  );
}