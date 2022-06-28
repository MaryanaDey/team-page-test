import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const CommonAnchorLink = ({ title, href }) => (
  <StyledLink href={href}>{title}</StyledLink>
);

const StyledLink = styled(AnchorLink)`
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 4px 18px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 80px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  transition: ${(p) => p.theme.animations.primary} background-color;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export default CommonAnchorLink;
