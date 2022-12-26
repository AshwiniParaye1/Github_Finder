import React from 'react'
import { useEffect, useState } from 'react';


function UserResults() {

const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)


    useEffect(() => {
            
        fetchUsers()

    },  [])

    const fetchUsers = async () => {

        // fetching users data from github url
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()

        setUsers(data)
        console.log(data)
        setLoading (false)     
        //after fetching the users data loading will be false
        
    }

    if(!loading) { //if not loading then return users login

        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {users.map((user) => (
                        <h3 key={user.id}>{user.login}</h3>   
                        // fetching/mapping users login with map()
                    ))}
            </div>
          )

    } else {
        
       return <h3>Loading...</h3>
    }
    
  
}

export default UserResults
