import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectEmail,
  selectIsRefreshing,
} from '../redux/selectors/users.selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const email = useSelector(selectEmail);

  return {
    isLoggedIn,
    isRefreshing,
    email,
  };
};
