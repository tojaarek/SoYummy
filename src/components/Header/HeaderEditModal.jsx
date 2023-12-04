import css from './Header.module.css';
import { useEffect, useState } from 'react';
import { ReactComponent as CrossIcon } from '../../images/Header/CrossIcon.svg';
import { ReactComponent as AddPhotoIcon } from '../../images/Header/AddPhotoIcon.svg';
import { ReactComponent as Man } from '../../images/Header/man.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Pen } from '../../images/Header/pen.svg';
import { getAvatar } from 'redux/selectors/users.selectors';
import { changeAvatar, changeName } from 'redux/actions/users.actions';

export const HeaderEditModal = ({ onClose }) => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const avatarImage = useSelector(getAvatar);
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
  }, [onClose, avatarImage]);

  const handleAvatar = event => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleName = event => {
    const name = event.target.value;
    setName(name);
  };

  const handleSave = event => {
    event.preventDefault();
    const newAvatar = new FormData();
    newAvatar.append('avatar', avatar);
    dispatch(changeName({ name: name }));
    dispatch(changeAvatar(newAvatar)).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <div className={css.HeaderEditModalOverlayStyled}>
        <div className={css.HeaderEditModalBodyStyled}>
          <div className={css.HeaderEditModalContainerStyled}>
            <button
              className={css.HeaderEditModalCloseButtonStyled}
              onClick={() => {
                onClose();
              }}
            >
              <CrossIcon className={css.CrossIcon} />
            </button>
            <div className={css.HeaderEditModalStyledImgContainer}>
              <img
                src={avatarImage}
                alt="User avatar"
                className={css.avatar}
              ></img>
            </div>
            <form className={css.HeaderEditModalForm}>
              <label className={css.HeaderEditModalForm}>
                <input
                  type="file"
                  name="file"
                  accept="image/png, image/jpeg, image/jpg"
                  className={css.HeaderEditModalFileInput}
                  onChange={handleAvatar}
                />

                <AddPhotoIcon className={css.AddPhotoIcon} />
              </label>
              <label className={css.HeaderEditModalNameLabel}>
                <input
                  className={css.HeaderEditModalNameInput}
                  onChange={handleName}
                />

                <Pen className={css.HeaderEditModalPen} />
                <Man className={css.Man} />
              </label>
              <button
                className={css.HeaderEditModalSubmitButton}
                onClick={handleSave}
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
