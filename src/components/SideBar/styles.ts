import styled from 'styled-components';

export const SideBarContainer = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  animation: showSidebar .4s;

  padding: 1.25rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > svg {
    position: fixed;
    color: white;
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
  
  > img {
    width: 14.625rem;
    height: 3.125rem;
    margin: 0 auto;
    
  }
`;

export const SideBarContent = styled.div`
  margin-top: 50px;
  
  p {
    color: ${props => props.theme["gray-300"]};
    padding: 1.25rem 0;
    font-weight: bold;
  }
`;