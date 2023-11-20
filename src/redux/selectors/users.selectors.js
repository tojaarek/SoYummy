export const selectRegistered = state => state.users.isRegistered;
export const selectUserToken = state => state.users.token;
export const selectLoggedIn = state => state.users.isLoggedIn;
export const selectIsRefreshing = state => state.users.isRefreshing;
export const selectEmail = state => state.users.email;
export const getName = state => state.users.name;
export const getAvatar = state => state.users.avatar;
