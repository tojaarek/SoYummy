import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section, Container } from './SearchPage.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import Search from 'components/Search/Search';
import { useSelector } from 'react-redux';
import { selectUserToken } from 'redux/selectors/users.selectors';
import axios from 'axios';
import SearchResults from 'components/SearchResults/SearchResults';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const userToken = useSelector(selectUserToken);
  const [results, setResults] = useState(null);

  const getResults = async () => {
    try {
      const response = await axios.get(
        `https://soyummy-h1wx.onrender.com/recipes/search?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response) {
        setResults(response.data.data);
        return response.data.data;
      } else {
        throw new Error('Something went wrong...');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      getResults();
    } else {
      setResults(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Section>
      <Container>
        <MainTitle title="Search" />
        <Search />
        <SearchResults results={results} />
      </Container>
    </Section>
  );
};

export default SearchPage;
