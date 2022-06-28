import styled from 'styled-components';

import logo from 'assets/logo.svg';

const Logo = () => <Image src={logo} alt="logo" />;

const Image = styled.img`
  width: 104px;
`;

export default Logo;
