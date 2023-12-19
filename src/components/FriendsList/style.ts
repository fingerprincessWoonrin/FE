import styled from "styled-components";

export const MemberListContainer = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.span`
  display: flex;
  align-items: center;

  margin-left: 3rem;
`;

export const Name = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 400;

  text-align: center;
  margin-left: 1rem;
`;

export const DeleteWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  cursor: pointer;
`;
