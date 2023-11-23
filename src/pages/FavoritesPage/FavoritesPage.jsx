import { Section, Container } from './Favorites.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import {
  selectFavoritesIsDeleting,
  selectFavoritesTotalPages,
} from 'redux/selectors/favorites.selectors';
import { getUserFavorites } from 'redux/actions/favorites.actions';
import FavoritesList from 'components/FavoritesList/FavoritesList';

const FavoritesPage = () => {
  const totalPages = useSelector(selectFavoritesTotalPages);
  const isDeleting = useSelector(selectFavoritesIsDeleting);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (totalPages > 1) {
      const searchParams = new URLSearchParams(window.location.search);

      if (searchParams.has('page')) {
        const pageParam = searchParams.get('page');
        const newPage = parseInt(pageParam);
        setCurrentPage(newPage);
        dispatch(getUserFavorites(newPage));
      } else {
        searchParams.set('page', currentPage);
        window.history.replaceState(null, null, `?${searchParams.toString()}`);
        dispatch(getUserFavorites(currentPage));
      }
    } else {
      dispatch(getUserFavorites(currentPage));
    }
  }, [dispatch, currentPage, totalPages, isDeleting]);

  return (
    <>
      {isDeleting ? (
        <Loader text="Deleting recipe" />
      ) : (
        <Section>
          <Container>
            <MainTitle title="Favorites" />
            <FavoritesList />
            {totalPages > 1 && (
              <Pagination
                onPageChange={handlePageChange}
                page={currentPage}
                totalPages={totalPages}
              />
            )}
          </Container>
        </Section>
      )}
    </>
  );
};

export default FavoritesPage;
