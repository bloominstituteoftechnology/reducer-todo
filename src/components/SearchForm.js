import React from "react";

function SearchForm({ handleChange, searchTerm }) {
  return (
    <div className='form'>
      <form className='form'>
        <input
          onChange={handleChange}
          type='text'
          name='task'
          value={searchTerm}
          placeholder="Search Current To-Do's"
          className='searchInput'
        />
      </form>
    </div>
  );
}

export default SearchForm;
