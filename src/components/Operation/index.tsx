import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { MdCached } from "react-icons/md";

import { OperationComponentProps } from "./interface";

import {
  BackgroundPayment,
  PaymentContainer,
  PaymentContent,
  PaymentFlex,
  PaymentItem
} from "./style";

export const OperationComponent = (props: OperationComponentProps) => {

  const { title, valueOperation } = props;

  return (
    <PaymentContainer>
      <BackgroundPayment>
        <p>{title}</p>

        <PaymentContent>
          <PaymentItem>
            <PaymentFlex>
              <AiOutlineCheckCircle size={32} color="#448919" />
              <span>Concluído</span>
            </PaymentFlex>
            <span>{valueOperation?.COMPLETED || 0}</span>
          </PaymentItem>
          <PaymentItem>
            <PaymentFlex>
              <ImCancelCircle size={32} color="#B20D0D" />
              <span>Falhou</span>
            </PaymentFlex>
            <span>{valueOperation?.FAILED || 0}</span>
          </PaymentItem>
          <PaymentItem>
            <PaymentFlex>
              <MdCached size={32} color="#229ED9" />
              <span>Em processamento</span>
            </PaymentFlex>
            <span>{valueOperation?.PROCESSING || 0}</span>
          </PaymentItem>
        </PaymentContent>
      </BackgroundPayment>
    </PaymentContainer>
  );
};