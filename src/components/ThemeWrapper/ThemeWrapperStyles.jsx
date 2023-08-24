import styled from 'styled-components';

export const ThemeApplier = styled.div`
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -1;

  background-color: ${(props) => props.theme?.palette?.background?.default};
  color: ${(props) => props.theme?.palette?.textColor?.default};
`;
