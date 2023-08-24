import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #534b52;
  height: 75px;
  width: auto;
  padding: 0 30px 0 30px;
  color: #fdfdfd;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const UtilityBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-right: 25px;
  }
`;
