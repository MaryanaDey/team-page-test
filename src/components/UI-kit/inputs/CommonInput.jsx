import styled from 'styled-components';

const CommonInput = ({ onChange, value, label, error, helper, ...props }) => {
  const renderHelper = () => {
    if (error) return <Error>{error}</Error>;
    if (helper) return <Helper>{helper}</Helper>;
    return null;
  };

  return (
    <Wrapper>
      <Input onChange={onChange} value={value} {...props} />
      <Label>{label}</Label>

      {renderHelper()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px;

  &:focus {
    outline: 1px solid ${(p) => p.theme.colors.accent};
  }
`;

const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  padding: 0 4px;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.placeholder};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  transition: ${(p) => p.theme.animations.primary} top,
    ${(p) => p.theme.animations.primary} font-size;

  ${Input}:focus ~ &, 
  ${Input}:not([value=""]) ~ & {
    top: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Helper = styled.p`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 4px;
  padding-left: 16px;
  color: ${(p) => p.theme.colors.placeholder};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Error = styled(Helper)`
  color: ${(p) => p.theme.colors.error};
`;

export default CommonInput;
