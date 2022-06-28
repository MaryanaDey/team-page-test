import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Section = ({ children, title, id }) => (
  <Wrapper id={id}>
    <Container>
      {title ? <Title>{title}</Title> : null}
      {children}
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 140px;

  &:first-child {
    padding-top: 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 328px;

  @media ${breakpoints.tablet} {
    width: 704px;
  }

  @media ${breakpoints.laptop} {
    width: 904px;
  }

  @media ${breakpoints.desktop} {
    width: 1170px;
  }
`;

const Title = styled.h2`
  margin-bottom: 50px;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
`;

export default Section;
