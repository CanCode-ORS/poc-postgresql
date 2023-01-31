import React, {useEffect, useState} from 'react'
//components
import Header from '../../components/teams/Header.js'
import AddTeam from '@/components/teams/AddTeam.js';
import TeamsList from '@/components/teams/TeamsList.js';
import TopNavbar from '@/components/menus/TopNavbar.js';
// import { useRouter } from 'next/navigation.js';

const Teams = () => {
  
  return (
      <>
      <TopNavbar pageName='Manage Teams'/>
      {/* <Header headerText="Teams" /> */}
      <AddTeam />
      <TeamsList />
      </>
  )
}

export const getStaticProps = async () => {
  const resp = await fetch('http://localhost:3000/api/teams');
  let data = await resp.json();

  return {
    props: { teams: data }
  }
}

export default Teams;