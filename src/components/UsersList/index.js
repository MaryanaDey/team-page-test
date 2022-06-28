import { connect } from 'react-redux';

import UsersList from './UsersList';

import { usersOperations, usersSelectors, usersActions } from 'store/users';

const mapStateToProps = (state) => ({
  list: usersSelectors.getUsersList(state),
  isLoading: usersSelectors.getLoading(state),
  isFetching: usersSelectors.getFetching(state),
  totalPages: usersSelectors.getTotalPages(state),
  currentPage: usersSelectors.getCurrentPage(state),
  formCompleted: usersSelectors.getIsCompletedForm(state),
});

const mapDispatchToProps = (dispatch) => ({
  incrementPage: () => dispatch(usersActions.incrementPage()),
  fetchUsers: (page, count, offeset) =>
    dispatch(usersOperations.fetchUsers({ page, count, offeset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
