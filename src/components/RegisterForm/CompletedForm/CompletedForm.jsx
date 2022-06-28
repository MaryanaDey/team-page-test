import styled from 'styled-components';

import image from 'assets/success-image.svg';

const CompletedForm = () => (
  <Wrapper>
    <Title>User successfully registered</Title>
    <Image src={image} alt="success image" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: ${(p) => p.theme.colors.primary};
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
`;

const Image = styled.img`
  width: 290px;
  margin: 50px 0;
`;

export default CompletedForm;
