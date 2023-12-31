import { Section, Container } from './Favorites.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import {
  selectFavorites,
  selectFavoritesIsDeleting,
  selectFavoritesIsLoading,
  selectFavoritesTotalPages,
} from 'redux/selectors/favorites.selectors';
import { getUserFavorites } from 'redux/actions/favorites.actions';
import FavoritesList from 'components/FavoritesList/FavoritesList';
import { Helmet } from 'react-helmet';

const FavoritesPage = () => {
  const totalPages = useSelector(selectFavoritesTotalPages);
  const isDeleting = useSelector(selectFavoritesIsDeleting);
  const isLoading = useSelector(selectFavoritesIsLoading);
  // eslint-disable-next-line no-unused-vars
  const favorites = useSelector(selectFavorites);
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
  }, [dispatch, currentPage, totalPages]);

  return (
    <>
      <Helmet>
        <title>SoYummy | Favorites</title>
      </Helmet>
      {isLoading ? (
        <Loader text="Loading..." />
      ) : (
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
      )}
    </>
  );
};

export default FavoritesPage;
