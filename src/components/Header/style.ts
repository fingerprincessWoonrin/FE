import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.25);
`;

export const LogoBox = styled.div`
  width: 120px;
  height: 120px;
`;

export const HeaderItem = styled.div`
  position: absolute;
`;

export const HeaderLine = styled.div`
  position: absolute;
  left: 80%;
  right: 10%;
  top: 0.2%;
  bottom: 100%;
  border: 1px solid #e3e3e3;
  transform: rotate(90deg);
`;

export const UserName = styled.p`
  position: absolute;
  left: 86.3%;
  right: 10%;
  top: 2.5%;
  bottom: 96.71%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 36px;
`;

export const Date = styled.p`
  position: absolute;
  left: 86.3%;
  right: 10%;
  top: 6.2%;
  bottom: 95.51%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 18px;

  color: #6c6c6c;
`;

export const CategoryBox = styled.div`
  position: absolute;
  left: 97.6%;
  right: 2%;
  top: 4%;
  bottom: 96.43%;
`;
