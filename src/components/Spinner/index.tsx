import { ContainerSpinner, StyledSpinner } from "./styles";

export function Spinner() {

  return (
    <ContainerSpinner>
      <StyledSpinner />
      <span>Esse processo pode levar alguns minutos para ser concluído</span>
    </ContainerSpinner>
  );
}