import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px 0 50px;
`;

export const HomeTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})`
  font-size: 2rem;
  font-weight: 700;

  color: ${(props) => props.theme.palette?.textColor?.title};
  margin-bottom: 1rem;
  margin: 25px;
  border-bottom: 2.5px solid #2d3a3a;
`;

export const CustomParagraph = styled.p.withConfig({
  shouldForwardProp: (prop) => {
    if (!['leftBorder', 'theme'].includes(prop)) return true;
    return false;
  },
})`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 0.02rem;
  padding: 0 1rem 0 1rem;

  color: ${(props) => props.theme.palette?.textColor?.default};
  border-left: ${(props) => (props.leftBorder ? '2.5px solid #2d3a3a' : 'none')};
`;
