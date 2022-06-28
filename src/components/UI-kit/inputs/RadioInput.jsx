import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const RadioInput = ({ onChange, value, label, list, name, error }) => {
  const renderList = () => {
    const elementHTML = list.map((item) => {
      const isActive = Number(value) === item.id;

      return (
        <Item key={item.id}>
          <StyledRadio isActive={isActive} />
          <Label>
            <Input
              type="radio"
              id={name}
              value={item.id}
              onChange={onChange}
              checked={isActive}
            />
            {item.name}
          </Label>
        </Item>
      );
    });

    return elementHTML;
  };

  return (
    <Wrapper>
      <Title>{label}</Title>
      <List>{list.length ? renderList() : null}</List>

      {error ? <Error>{error}</Error> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 328px;

  @media ${breakpoints.tablet} {
    width: 380px;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

const List = styled.ul`
  margin-top: 11px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-left: 12px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledRadio = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${(p) => (p.isActive ? p.theme.colors.secondary : p.theme.colors.border)};
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${(p) => (p.isActive ? '1' : '0')};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.secondary};
    transition: ${(p) => p.theme.animations.primary} opacity;
  }
`;

const Error = styled.p`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 4px;
  padding-left: 16px;
  color: ${(p) => p.theme.colors.error};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export default RadioInput;
