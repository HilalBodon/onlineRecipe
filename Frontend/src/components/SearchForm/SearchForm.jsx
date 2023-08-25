import React, { useState } from 'react';
import './styles.css';
const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name'); // Default search type

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchType, searchTerm); // Pass both search type and term to the onSearch function
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className=""
      >
        <option value="name">Name</option>
        <option value="cuisine">Cuisine</option>
        <option value="ingredients">Ingredients</option>
      </select>
      <input
        type="text"
        placeholder={`Search by ${searchType}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
