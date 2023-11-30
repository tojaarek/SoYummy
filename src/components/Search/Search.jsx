import { Form, Input, Button } from './Search.styled';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    const search = event.currentTarget.elements.search.value;
    if (search) {
      navigate({
        pathname: '/main/search',
        search: createSearchParams({
          q: search,
        }).toString(),
      });
    } else {
      toast.error('Please type something into the search box!', {
        position: toast.POSITION.TOP_RIGHT,
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

export default Search;
