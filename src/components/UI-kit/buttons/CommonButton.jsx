import styled from 'styled-components';

import Preloader from 'components/UI-kit/Preloader';

const CommonButton = ({
  title,
  size = 100,
  isFetching,
  disabled,
  ...props
}) => (
  <Button disabled={disabled} size={size} {...props}>
    {isFetching ? <Preloader /> : title}
  </Button>
);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.size}px;
  min-height: 34px;
  padding: 4px 18px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 80px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  transition: ${(p) => p.theme.animations.primary} background-color;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.hover};
  }

  &:disabled {
    cursor: default;
    color: ${(p) => p.theme.colors.disabledAlpha};
    background-color: ${(p) => p.theme.colors.disabled};
  }
`;

export default CommonButton;
