import PropTypes from 'prop-types';
import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

import cover from 'assets/photo-cover.svg';

const UserCard = ({ name, photo, position, email, phone }) => (
  <Wrapper>
    <Photo src={photo.includes('placeholder') ? cover : photo} alt={name} />

    <Title tooltip={name} text={name} length={30} />
    <Info tooltip={position} text={position} length={30} />
    <Info tooltip={email} text={email} length={30} />
    <Info tooltip={phone} text={phone} length={30} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.contrast};
  border-radius: 10px;
`;

const Photo = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

const Info = styled(EllipsisText)`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

const Title = styled(EllipsisText)`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default UserCard;
