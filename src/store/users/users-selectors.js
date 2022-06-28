const getUsersList = (state) => state.users.list;
const getLoading = (state) => state.users.isLoadingList;
const getTotalPages = (state) => state.users.totalPages;
const getFetching = (state) => state.users.isFetching;
const getCurrentPage = (state) => state.users.currentPage;
const getIsCompletedForm = (state) => state.users.isCompletedForm;

const usersSelectors = {
  getUsersList,
  getLoading,
  getFetching,
  getTotalPages,
  getCurrentPage,
  getIsCompletedForm,
};

export default usersSelectors;
