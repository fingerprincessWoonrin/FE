import styled from "styled-components";

export const LeftBarWrapper = styled.div<{ pathname: string }>`
  position: fixed;
  left: 0;
  width: 6.3rem;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  display: ${({ pathname }) =>
    pathname.includes("login") || pathname.includes("signup")
      ? "none"
      : "block"};
`;

export const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  height: 37.5rem;
  margin-top: 5rem;

  svg {
    cursor: pointer;
  }
`;
