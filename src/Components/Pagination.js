import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = []

  for(let i=1; i<=Math.ceil(totalUsers / usersPerPage); i++){
    pageNumbers.push(i)
  }
	return (
		<nav>
      <ul className='pagination'>
        {pageNumbers.map(number => {
          return(
            <li key={number}>
              <button onClick ={() => paginate(number)}>{number}</button>
            </li>
          )
        })}
      </ul>
    </nav>
	)
}

export default Pagination;