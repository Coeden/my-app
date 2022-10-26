import { useState, useEffect } from "react";
import UserList from "./UserLists";
import Pagination from "./Pagination";

export const Users =()=> {
  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(10)

  useEffect(()=> {
    const url = 'https://randomuser.me/api/?results=50'
    const fetchUser = async() => {
      setLoading(true)
      const res = await fetch(url);
      const {results} = await res.json();
      setUsersList(results);
      setLoading(false)
    }
    fetchUser();
  }, [])

  //Get current User
  const indexOfLastPage  = currentPage * recordsPerPage
  const indexOfFirstPage = indexOfLastPage - recordsPerPage
  const currentUserPage = usersList.slice(indexOfFirstPage, indexOfLastPage);

  //Change page
  const paginate = pageNum => setCurrentPage(pageNum)

	return(
		<div className="cont">
      <h2>List of Users</h2>
      <UserList users={currentUserPage} loading={loading} />
      <Pagination usersPerPage={recordsPerPage} totalUsers={usersList.length} paginate={paginate} />
    </div>
	)
}