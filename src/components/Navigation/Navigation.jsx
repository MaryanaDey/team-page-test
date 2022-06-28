import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Logo from 'components/Logo';

import CommonAnchorLink from 'components/UI-kit/buttons/CommonAnchorLink';

const Navigation = () => (
  <Wrapper>
    <Nav>
      <Logo />

      <Links>
        <Link>
          <CommonAnchorLink title="Users" href="#get" />
        </Link>
        <Link>
          <CommonAnchorLink title="Sign up" href="#post" />
        </Link>
      </Links>
    </Nav>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.contrast};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  margin: 0 auto;
  padding: 13px 16px;

  @media ${breakpoints.tablet} {
    width: 768px;
    padding: 13px 32px;
  }

  @media ${breakpoints.laptop} {
    width: 1024px;
    padding: 13px 60px;
  }

  @media ${breakpoints.desktop} {
    width: 1170px;
    padding: 13px 0px;
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
`;

const Link = styled.li`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export default Navigation;
