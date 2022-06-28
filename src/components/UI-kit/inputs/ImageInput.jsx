import styled from 'styled-components';

const ImageInput = ({ name, onChange, fileName, error, ...props }) => {
  const handleFile = (e) => onChange(name, e.currentTarget.files[0]);

  return (
    <Label>
      <Input onChange={handleFile} type="file" id={name} {...props} />
      <CustomInput>{fileName ?? 'Upload your photo'}</CustomInput>

      {error ? <Error>{error}</Error> : null}
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: block;
  height: 54px;
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
`;

const CustomInput = styled.span`
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding-left: 99px;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &::before {
    content: 'Upload';
    position: absolute;
    display: block;
    top: -1px;
    left: -1px;
    width: 83px;
    padding: 14px 15px;
    border: 1px solid ${(p) => p.theme.colors.blackAlpha};
    border-radius: 4px 0px 0px 4px;
  }

  &::after {
    content: '';
    color: ${(p) => p.theme.colors.placeholder};
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

export default ImageInput;
