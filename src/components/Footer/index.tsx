import { IoGameControllerOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

import { FooterContainer, FooterContent } from "./styles";

export function Footer() {

  return (
    <FooterContainer>
      <FooterContent>
        <div role="button"><MdMenuBook /></div>
        <div role="button"><IoGameControllerOutline /></div>
        <div role="button">  <FaDollarSign /></div>
      </FooterContent>
    </FooterContainer>
  );
}