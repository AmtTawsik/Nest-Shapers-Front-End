import { Input } from 'antd';

const { Search } = Input;

function SearchInput() {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading
    />
  );
}

export default SearchInput;
