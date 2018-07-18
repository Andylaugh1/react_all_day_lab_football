import React from 'react';
import TeamSelector from '../Components/TeamSelector.js'
import TeamDetail from '../Components/TeamDetail.js'
import Search from '../Components/Search.js'

class TeamContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filteredTeams: [],
      teams: [],
      currentTeam: null
    };
    this.handleTeamSelected = this.handleTeamSelected.bind(this);
    this.filterTeams = this.filterTeams.bind(this);
  }

  componentDidMount() {
    const url = 'http://api.football-data.org/v2/teams/';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("x-auth-token", "eecc79c818ac45bf90284a07d4ee1092");
    request.onload = () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const teamsList = JSON.parse(jsonString);
        this.setState({teams: teamsList.teams})
        this.setState({filteredTeams: teamsList.teams})
      }
    }
    request.send();
  }

  handleTeamSelected(index) {
    const selectTeam = this.state.teams[index];
    this.setState({currentTeam: selectTeam})
  }

  filterTeams(searchTerm) {
    const filteredTeams = this.state.teams.filter((team) => {
      return searchTerm === team.name
    })
    console.log(filteredTeams);
    this.setState({filteredTeams: filteredTeams})
  }

  render(){
    return(
      <div>
        <h2>Team List</h2>
        <Search filterTeams={this.filterTeams}/>
        <TeamSelector teams={this.state.filteredTeams} onTeamSelected = {this.handleTeamSelected}/>
        <TeamDetail team={this.state.currentTeam}/>
      </div>
    );
  }
}

export default TeamContainer;
