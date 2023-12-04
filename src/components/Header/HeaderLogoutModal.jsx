import { useEffect } from 'react';
import css from './Header.module.css';
import { ReactComponent as CrossIcon } from '../../images/Header/CrossIcon.svg';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/actions/users.actions';

export const HeaderLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const logoutHandler = () => {
    dispatch(logOut());
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div
      className={css.HeaderLogoutModalOverlayStyled}
      onClick={handleOverlayClick}
    >
      <div className={css.HeaderLogoutModalBodyStyled}>
        <div className={css.HeaderLogoutModalContainerStyled}>
          <button
            className={css.HeaderLogoutModalCloseButtonStyled}
            onClick={() => {
              onClose();
            }}
          >
            <CrossIcon className={css.CrossIcon} />
          </button>
          <p className={css.HeaderLogoutModalTextStyled}>
            Are you sure you want to log out?
          </p>
          <div className={css.HeaderLogoutModalButtonsContainerStyled}>
            <button
              className={css.HeaderLogoutModalLogoutButtonStyled}
              onClick={logoutHandler}
            >
              Log out
            </button>
            <button
              className={css.HeaderLogoutModalCancelButtonStyled}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
