import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { MdCached } from "react-icons/md";

import {
  BackgroundPayment,
  PaymentContainer,
  PaymentContent,
  PaymentFlex,
  PaymentItem
} from "./style";

export const OperationComponent = () => {

  return (
    <PaymentContainer>
      <BackgroundPayment>
        <p>Deposit Operations</p>

        <PaymentContent>
          <PaymentItem>
            <PaymentFlex>
              <AiOutlineCheckCircle size={32} color="#448919" />
              <span>Completed</span>
            </PaymentFlex>
            <span>930</span>
          </PaymentItem>
          <PaymentItem>
            <PaymentFlex>
              <ImCancelCircle size={32} color="#B20D0D" />
              <span>Failed</span>
            </PaymentFlex>
            <span>60</span>
          </PaymentItem>
          <PaymentItem>
            <PaymentFlex>
              <MdCached size={32} color="#229ED9" />
              <span>Processing</span>
            </PaymentFlex>
            <span>302</span>
          </PaymentItem>
        </PaymentContent>
      </BackgroundPayment>
    </PaymentContainer>
  );
};