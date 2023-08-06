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