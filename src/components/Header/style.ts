import styled from "styled-components";

export const Header = styled.header<{ pathname: string }>`
  width: 100%;
  height: 6.3rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
  display: ${({ pathname }) =>
    pathname.includes("login") || pathname.includes("signup")
      ? "none"
      : "flex"};
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const LogoBox = styled.div`
  width: 7.5rem;
  height: 6.3rem;
`;

export const HeaderLeft = styled.div`
  border-right: 1px solid #e3e3e3;
  width: 18.75rem;
  height: 100%;
  padding: 1.2rem 1.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const Description = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
  border-left: 1px solid #e3e3e3;
  height: 100%;
  justify-content: space-between;
  width: 18.75rem;
  margin-left: 55%;
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  margin-top: 1.2rem;
  margin-left: 1.2rem;
`;

export const UserName = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #000000;
`;

export const Date = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

export const CategoryBox = styled.div`
  margin-right: 2rem;
  margin-top: 1rem;
  cursor: pointer;
`;
