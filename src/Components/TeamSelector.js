import React from 'react';

const TeamSelector = (props) => {
  const options = props.teams.map((team, index) => {
    return <option value={index} key={index}>{team.name}</option>
  })

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onTeamSelected(selectedIndex);
  }

  return(
    <select id='team-selector' onChange={handleChange} defaultValue ='default'>
      <option disabled value ='default'>Choose a team...</option>
      {options}
    </select>
  )
}

export default TeamSelector;
