import { useState } from 'react';
import _ from 'lodash';

const SearchBar = ({ setResults, clearResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async value => {
    clearResults().then(data => {
      var results = data.filter(movie =>
        movie.metadata.find(v => v.includes(value.toLowerCase()))
      );
      setResults(results);
    });
  };

  const handleClear = async () => {
    clearResults().then(resultsCleared => setResults(resultsCleared));
  };

  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-outline-secondary'
          onClick={() => handleSearch(searchTerm)}>
          Submit
        </button>
        <button
          className='btn btn-outline-secondary'
          onClick={() => handleClear()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
