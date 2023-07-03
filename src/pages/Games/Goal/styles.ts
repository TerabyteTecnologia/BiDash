import styled from "styled-components";

export const ContainerGoal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  max-width: 1220px;

  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    h1 {
      font-size: clamp(18px, 2vw, 12px);
      color: ${(props) => props.theme["background-btn"]};
    }

    a {
      cursor: pointer;
    }
  }
`;