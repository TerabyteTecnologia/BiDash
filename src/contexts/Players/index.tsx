import {
  createContext,
  useContext,
  useState
} from 'react';

import {
  GraphicAgeProps,
  GraphicDatesProps,
  GraphicGenderProps,
  GraphicStateProps,
  PlayerProps,
  PlayersContextValue,
  PlayersProviderType
} from './interface';

const PlayersContext = createContext({} as PlayersContextValue);

export function PlayersContextProvider({ children }: PlayersProviderType) {

  const [playerCountDate, setPlayerCountDate] = useState<PlayerProps>({
    activePlayer: 0,
    disabledPlayer: 0,
    totalPlayer: 0
  });

  const [graphicAgeData, setGraphicAgeData] = useState<GraphicAgeProps>({
    ages: [],
    quantitiesAges: []
  });

  const [graphicStateData, setGraphicStateData] = useState<GraphicStateProps>({
    states: [],
    quantitiesState: []
  });

  const [graphicDatesData, setGraphicDatesData] = useState<GraphicDatesProps>({
    dates: [],
    quantitiesDate: []
  });

  const [graphicGenderData, setGraphicGenderData] = useState<GraphicGenderProps>({
    sortedGenders: [],
    sortedQuantitiesByGender: []
  });

  const contextValue: PlayersContextValue = {
    setPlayerCountDate,
    setGraphicAgeData,
    setGraphicDatesData,
    setGraphicGenderData,
    setGraphicStateData,

    playerCountDate,
    graphicAgeData,
    graphicDatesData,
    graphicGenderData,
    graphicStateData
  };

  return (
    <PlayersContext.Provider
      value={contextValue}
    >
      {children}
    </PlayersContext.Provider>
  );
}

export const usePlayers = () => {
  return useContext(PlayersContext);
};