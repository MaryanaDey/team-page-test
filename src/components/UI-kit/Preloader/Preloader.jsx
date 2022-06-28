import styled, { keyframes } from 'styled-components';
import loader from 'assets/loader.svg';

const Preloader = ({ size = 'sm' }) => (
  <Wrapper size={size}>
    <Spinner src={loader} />
  </Wrapper>
);

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: ${(p) => (p.size === 'sm' ? '14px' : '20px')};
  height: ${(p) => (p.size === 'sm' ? '14px' : '20px')};
`;

const Spinner = styled.img`
  animation: ${animation} 2s linear infinite;
`;

export default Preloader;
