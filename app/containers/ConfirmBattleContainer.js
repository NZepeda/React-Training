import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

var githubHelpers = require('../utils/GithubHelpers');

export default class ConfirmBattleContainer extends React.Component{

  constructor(props){
    super(props);
    this.state =  {
      isLoading: true,
      playerInfo: []
    };
  }

  componentDidMount(){
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    }.bind(this));
  }

  handleInitiateBattle(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }

  render(){
    return(<ConfirmBattle
            isLoading = { this.state.isLoading }
            onInitiateBattle = {this.handleInitiateBattle }
            playersInfo = { this.state.playerInfo  }/>)
  }


}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
