import React from "react";

const UserList = ({ users, loading }) => {
	if(loading) {
		return <h2>Loading ............ </h2>
	}

	return (
    <>
      {users.map(user => {
        return (
          <div className='card'>
            <div className='container'>
              <h6>{user.name.title} {user.name.first} {user.name.last}</h6>
              <h6>{user.phone}</h6>
              <h6>{user.email}</h6>
              <h6>{user.location.city}</h6>
              <img src={user.picture.thumbnail} alt='Picture' />
            </div>
          </div>
        )
		})}
	</>
  )
}

export default UserList;