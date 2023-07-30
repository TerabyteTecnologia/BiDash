import { FaSearch } from "react-icons/fa";

import { Visibility } from "../Visibility";
import { useFilterSearch } from "../../contexts/FilterSearch";
import { FilterSearchProps } from "./interface";

import { ContainerFilterSearch, ToggleButton, ToggleSwitchContent } from "./styles";

export function FilterSearch(props: FilterSearchProps) {

  const { handleSearch, showPlayerTest = false } = props;

  const {
    handleDateFirst,
    handleDateEnd,
    onBlurCalcDataFrom,
    onBlurCalcDataTo,
    dateFilter,
    handleToggleIsTest,
    isTest
  } = useFilterSearch();

  return (

    <ContainerFilterSearch>

      <Visibility visible={showPlayerTest}>
        <ToggleSwitchContent>
          <ToggleButton isChecked={isTest}>
            <input type="checkbox" defaultChecked={isTest} onChange={handleToggleIsTest} />
            <span />
          </ToggleButton>
          <p>Jogador Teste</p>
        </ToggleSwitchContent>
      </Visibility>

      <input
        className="flex-1"
        value={dateFilter.from}
        onChange={handleDateFirst}
        type="date"
        max={dateFilter.to}
        placeholder="Início"
        onBlur={() => onBlurCalcDataFrom()}
      /> a
      <input
        value={dateFilter.to}
        onChange={handleDateEnd}
        className="flex-1"
        type="date"
        min={dateFilter.from}
        placeholder="Fim"
        onBlur={() => onBlurCalcDataTo()}
      />

      <button onClick={handleSearch}>
        <FaSearch />
        Pesquisar
      </button>

    </ContainerFilterSearch>
  );
}