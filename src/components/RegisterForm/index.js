import { connect } from 'react-redux';
import { settingsOperations, settingsSelectors } from 'store/settings';
import { usersOperations, usersSelectors } from 'store/users';

import RegisterForm from './RegisterForm';

const mapStateToProps = (state) => ({
  positionsList: settingsSelectors.getPositionsList(state),
  isFetching: usersSelectors.getFetching(state),
  isCompleted: usersSelectors.getIsCompletedForm(state),
});

const mapDistpatchToProps = (dispatch) => ({
  loadSettings: () => dispatch(settingsOperations.fetchPositions()),
  createUser: (data) => dispatch(usersOperations.createUser(data)),
});

export default connect(mapStateToProps, mapDistpatchToProps)(RegisterForm);
