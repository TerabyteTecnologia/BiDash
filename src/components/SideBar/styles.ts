import styled from 'styled-components';

export const SideBarContainer = styled.div`
  background: ${props => props.theme["gray-400"]};

  position: fixed;
  height: 100%;
  top: 0rem;
  left: 0rem;
  width: 18.75rem;
  animation: showSidebar .4s;

  padding: 1.25rem;

  margin: 0 auto;
  overflow-x: auto;

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
  gap: 0.625rem;
  display: flex;
  flex-direction: column;

  margin-top: 1.875rem;
  
  p {
    color: ${props => props.theme["gray-300"]};
    padding: 1.25rem 0;
    font-weight: bold;
  }
`;