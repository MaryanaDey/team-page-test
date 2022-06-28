import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CommonAnchorLink from 'components/UI-kit/buttons/CommonAnchorLink';

const Hero = () => (
  <Wrapper>
    <Info>
      <Title>Test assignment for front-end developer</Title>
      <Text>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Text>

      <CommonAnchorLink title="Sign up" href="#post" />
    </Info>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.heroMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${breakpoints.laptop} {
    height: 650px;
  }
`;

const Info = styled.div`
  width: 328px;
  text-align: center;
  color: ${(p) => p.theme.colors.contrast};

  @media ${breakpoints.tablet} {
    width: 380px;
  }
`;

const Title = styled.h2`
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
`;

const Text = styled.p`
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

export default Hero;
