import styled from 'styled-components';
import Button from '@mui/material/Button';

export const CounterMenu = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  color: #fdfdfd !important;

  background-color: ${(props) => (props.number % 2 === 0 ? '#004777' : '#823329')} !important;

  margin: 25px;
`;
