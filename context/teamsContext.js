import React, {useContext, createContext, useState, useEffect} from 'react';

const TeamsContext = createContext();

function TeamsContextProvider(props) {
    const [teams, setTeams] = useState();

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch('http://localhost:3000/api/teams');
                const data = await resp.json();
                setTeams(data);
            } catch (err) {
                console.log('Error occured when fetching teams');
            }
        })();
    }, [teams])

    return (
        <TeamsContext.Provider value={[teams, setTeams]} {...props} />
    )
}

function useTeams() {
    const context = useContext(TeamsContext);
    if(!context) throw new Error("Issue with provider");
    return context;
}

export {TeamsContextProvider, useTeams};