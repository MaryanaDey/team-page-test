import styled from 'styled-components';

import Navigation from 'components/Navigation';
import Hero from './Hero';

const Header = () => (
  <Wrapper>
    <Navigation />
    <Hero />
  </Wrapper>
);

const Wrapper = styled.header``;

export default Header;
