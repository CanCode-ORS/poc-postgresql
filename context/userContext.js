import React, {useContext, createContext, useState, useEffect} from 'react';

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            try {
                console.log('User context');
                // const resp = await fetch('http://localhost:3000/api/teams');
                // const data = await resp.json();
                // setTeams(data);
            } catch (err) {
                console.log('Error occured when fetching user');
            }
        })();
    }, [user])

    return (
        <UserContext.Provider value={[user, setUser]} {...props} />
    )
}

function useUser() {
    const context = useContext(UserContext);
    if(!context) throw new Error("Issue with provider");
    return context;
}

export {UserContextProvider, useUser};