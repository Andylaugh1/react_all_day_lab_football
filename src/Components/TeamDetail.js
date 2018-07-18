import React from 'react';

const TeamDetail = (props) => {
  if(!props.team) return null;
  return (
    <div>
      <h3>{props.team.name}</h3>
      <p>{props.team.founded}</p>
      <p>{props.team.clubColors}</p>
    </div>
  )
}

export default TeamDetail;
