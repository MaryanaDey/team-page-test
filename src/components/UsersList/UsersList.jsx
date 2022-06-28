import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import UserCard from './UserCard';
import UsersListSkeleton from './UsersListSkeleton';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const UsersList = ({
  isLoading,
  isFetching,
  currentPage,
  list,
  totalPages,
  fetchUsers,
  incrementPage,
}) => {
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const renderList = () =>
    list.map((item) => (
      <Item key={item.id}>
        <UserCard {...item} />
      </Item>
    ));

  if (isLoading) return <UsersListSkeleton />;

  return (
    <Wrapper>
      <List>{list.length ? renderList() : null}</List>

      {currentPage < totalPages ? (
        <ContainerButton>
          <CommonButton
            isFetching={isFetching}
            title="Show more"
            onClick={incrementPage}
            size="120"
          />
        </ContainerButton>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerButton = styled.div`
  margin-top: 50px;
`;

const List = styled.ul`
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

const Item = styled.li`
  width: 328px;
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

export default UsersList;
