import { Form, Input, Button } from './SearchBar.styled';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    const search = event.currentTarget.elements.search.value;
    if (search) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          q: search,
          t: 'Title',
        }).toString(),
      });
    } else {
      toast.error('Please type something into the search box!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSearch} autoComplete="off">
        <Input name="search" placeholder="Search..."></Input>
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default SearchBar;
