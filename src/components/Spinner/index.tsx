import { Visibility } from "../Visibility";
import { ContainerSpinner, StyledSpinner } from "./styles";

interface SpinnerProps {
  isLogin?: boolean;
}

export function Spinner(props: SpinnerProps) {

  const { isLogin = false } = props;

  return (
    <ContainerSpinner>
      <StyledSpinner />
      <Visibility visible={!isLogin}>
        <span>Esse processo pode levar alguns minutos para ser concluído</span>
      </Visibility>
    </ContainerSpinner>
  );
}