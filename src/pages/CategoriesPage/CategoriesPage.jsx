import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Section, Container } from './CategoriesPage.styled';
import { fetchCategoriesList } from 'redux/actions/recipes.actions';
import CategoriesGalleryImage from 'components/Categories/CategoriesGallery';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import MainTitle from 'components/MainTitle/MainTitle';

const CategoriesPage = _ => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <MainTitle title="Categories" />
        <CategoriesList />
        <CategoriesGalleryImage categoryName={categoryName} />
      </Container>
    </Section>
  );
};

export default CategoriesPage;
