import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import SearchForm from "./SearchForm";
import style from "styled-components";

const Li = style.div`
	background: ;
	height: -10px;
`;

const ToDoList = ({ errands, toggleCompleted }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState(errands);

  useEffect(() => {
    const results = errands.filter(character => {
      return character.task.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
    //eslint-disable-next-line
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  if (searchTerm.length === 0) {
    return (
      <>
        <section className='formGoLeft'>
          <h3>Search</h3>
          <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
        </section>
        <ol className='errandList'>
          {errands.map(item => (
            <li>
              <ToDo
                key={item.id}
                item={item}
                toggleCompleted={toggleCompleted}
                searchTerm={item.task}
              />
            </li>
          ))}
        </ol>
      </>
    );
  } else {
    return (
      <>
        <section className='formGoLeft'>
          <h3>Search</h3>
          <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
        </section>
        <ol className='errandList'>
          {searchResults.map(item => (
            <li>
              <Li>
                <ToDo
                  key={item.id}
                  item={item}
                  toggleCompleted={toggleCompleted}
                  searchTerm={item.newTask}
                />
              </Li>
            </li>
          ))}
        </ol>
      </>
    );
  }
};

export default ToDoList;
