import React from 'react';
import { useEffect, useContext } from 'react';
import GithunContext from '../context/github/GithubContext';
import { useParams } from 'react-router-dom';


function User() {

    const {getUser, user, loading, getUserRepos, repos} = useContext(GithunContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
        // getUserRepos(params.login)
    }, [])

  return (
    <div>{user.login}</div>
  )
}

export default User