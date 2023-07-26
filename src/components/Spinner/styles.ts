import styled from "styled-components";

export const StyledSpinner = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  display: block;
  margin: 0 auto;

  &:before, &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
  }

  &:after {
    transform: rotate3d(90, 90, 0, 180deg );
    border-color: ${props => props.theme["blue-200"]};
  }

  @keyframes rotate {
    0%   {transform: rotate(0deg)}
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  }
`;