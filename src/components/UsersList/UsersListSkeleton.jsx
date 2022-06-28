import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const UsersListSkeleton = () => (
  <Wrapper>
    <Item as="li" />
    <Item as="li" />
    <Item as="li" />
    <Item as="li" />
    <Item as="li" />
    <Item as="li" />
  </Wrapper>
);

const animation = keyframes`
  from {
    background-color: hsl(200, 20%, 80%);
  }

  to {
    background-color: hsl(200, 20%, 95%);
  }
`;

const Animation = styled.div`
  animation: ${animation} 1s linear infinite alternate;
`;

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: 0;

  @media ${breakpoints.tablet} {
    margin-top: -16px;
    margin-left: -16px;
  }

  @media ${breakpoints.laptop} {
    margin-top: -29px;
    margin-left: -29px;
  }
`;

const Item = styled(Animation)`
  width: 328px;
  height: 254px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 0;

  @media ${breakpoints.tablet} {
    width: 344px;
    margin-top: 16px;
    margin-left: 16px;
  }

  @media ${breakpoints.laptop} {
    width: 282px;
    margin-top: 29px;
    margin-left: 29px;
  }

  @media ${breakpoints.desktop} {
    width: 370px;
  }
`;

export default UsersListSkeleton;
