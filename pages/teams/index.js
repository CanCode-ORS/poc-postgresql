import React, { useEffect, useState } from "react";
//components
import Header from "../../components/teams/Header.js";
import AddTeam from "@/components/teams/AddTeam.js";
import TeamsList from "@/components/teams/TeamsList.js";

const Teams = () => {
  return (
    <>
      <div className="mx-auto w-5/6 flex flex-col">
        <Header headerText="Teams" />
        <AddTeam />
        <TeamsList />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/teams");
  let data = await resp.json();

  return {
    props: { teams: data },
  };
};

export default Teams;
