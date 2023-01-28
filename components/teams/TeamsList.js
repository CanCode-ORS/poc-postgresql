import React, {useState, useEffect} from 'react'
// import Link from 'next/link'

const TeamsList = ({teams}) => {
  const [division, setDivision] = useState('A');

    const handleTeamSelected = (id) => {
        window.location = `/teams/${id}`
    }

    function handleUpdate(e, id) {
        e.stopPropagation();
        window.location = '/';
        // navigate(`/restaurants/${id}/update`);
    }

    async function handleDelete(e, id) {
        e.stopPropagation();
        try {
            await fetch('api/teams/' + id, {
            method: 'DELETE'
            }).catch(error => {
                console.log(error)
            })

        } catch (error) {
        console.error(error.message);
        }
    }

    function setDivisionString(division) {
        let newDivision = '';
        switch(division) {
            case 'AAA':
                newDivision = 'AAA - Elite';
            break;
            case 'AA':
                newDivision = 'AA - Competitive';
            break;
            case 'A':
                newDivision = 'A - Recreational';
            break;
            case 'B':
                newDivision = 'B - Recreational';
            break;
            case 'C':
                newDivision = 'C - Recreational';
            break;
            case 'D':
                newDivision = 'D - Recreational';
            break;
            default:
                newDivision = 'No division'
            break;
        }
        return newDivision;
    }
  
  return (
<div class="max-w-[80em] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead class="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Team name
                </th>
                <th scope="col" class="px-6 py-3">
                    Division
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Team Manager
                </th>
                <th scope="col" class="px-6 py-3 w-5">
                    
                </th>
                <th scope="col" class="px-6 py-3 w-5">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            {teams && teams.map((team) => (
                <tr onClick={() => handleTeamSelected(team.id)} class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                    <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                        {team.teamname}
                    </th>
                    <td class="px-6 py-4">
                        {setDivisionString(team.division)}
                    </td>
                    <td class="px-6 py-4">
                        {team.homeColor ? team.homeColor : 'No color set'}
                    </td>
                    <td class="px-6 py-4">
                    {team.teammanager}
                    </td>
                    <td class="px-6 py-4">
                    <button onClick={(e) => handleUpdate(e, team.id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Edit
                    </button>
                    </td>
                    <td class="px-6 py-4">
                    <button onClick={(e) => handleDelete(e, team.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Delete
                    </button>
                    </td>
                </tr>
            ))}
            
        </tbody>
    </table>
</div>


  )
}

export default TeamsList