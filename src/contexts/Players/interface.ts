import { Dispatch, SetStateAction } from "react";

export interface PlayersContextValue {
  setPlayerCountDate: Dispatch<SetStateAction<PlayerProps>>;
  setGraphicAgeData: Dispatch<SetStateAction<GraphicAgeProps>>;
  setGraphicStateData: Dispatch<SetStateAction<GraphicStateProps>>;
  setGraphicDatesData: Dispatch<SetStateAction<GraphicDatesProps>>;
  setGraphicGenderData: Dispatch<SetStateAction<GraphicGenderProps>>;

  playerCountDate: PlayerProps;
  graphicAgeData: GraphicAgeProps;
  graphicStateData: GraphicStateProps;
  graphicDatesData: GraphicDatesProps;
  graphicGenderData: GraphicGenderProps;
}

export interface PlayersProviderType {
  children: React.ReactNode;
}

export interface PlayerProps {
  activePlayer: number;
  disabledPlayer: number;
  totalPlayer: number;
}

export interface GraphicAgeProps {
  ages: string[];
  quantitiesAges: number[];
}

export interface GraphicStateProps {
  states: string[];
  quantitiesState: number[];
}

export interface GraphicDatesProps {
  dates: string[];
  quantitiesDate: number[];
}

export interface GraphicGenderProps {
  sortedGenders: string[];
  sortedQuantitiesByGender: number[];
}

export interface PlayerFilterProps {
  id: number,
  name: string,
  email: string,
  phone: string,
  state: string,
  age: string | number,
  registration: string;
}