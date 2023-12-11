import { Section, Container } from './MyRecipesPage.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserRecipes } from 'redux/actions/recipes.actions';
import {
  selectTOwnRecipesTotalPages,
  selectAddRecipeIsLoading,
  selectOwnRecipesIsDeleting,
} from 'redux/selectors/recipes.selectors';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Pagination from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import { Helmet } from 'react-helmet';

const MyRecipesPage = () => {
  const totalPages = useSelector(selectTOwnRecipesTotalPages);
  const isDeleting = useSelector(selectOwnRecipesIsDeleting);
  const isLoading = useSelector(selectAddRecipeIsLoading);
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
        dispatch(getUserRecipes(newPage));
      } else {
        searchParams.set('page', currentPage);
        window.history.replaceState(null, null, `?${searchParams.toString()}`);
        dispatch(getUserRecipes(currentPage));
      }
    } else {
      dispatch(getUserRecipes(currentPage));
    }
  }, [dispatch, currentPage, totalPages, isDeleting]);

  return (
    <>
      <Helmet>
        <title>SoYummy | My recipes</title>
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
                <MainTitle title="My recipes" />
                <MyRecipesList />
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

export default MyRecipesPage;
