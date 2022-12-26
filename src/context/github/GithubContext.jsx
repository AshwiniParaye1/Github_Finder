import { createContext, useState } from "react";


const GithubCintext = createContext()


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {

        // fetching users data from github url
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()

        setUsers(data)
        console.log(data)
        setLoading (false)     
        //after fetching the users data loading will be false
        
    }
}