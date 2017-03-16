import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

var githubHelpers = require('../utils/GithubHelpers');

export default class ConfirmBattleContainer extends React.Component{

  constructor(props){
    super(props);
    this.mounted = false;
    this.state =  {
      mounted: false,
      isLoading: true,
      playerInfo: []
    };
  }

  componentDidMount(){
    var query = this.props.location.query;
    this.mounted = true;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
      console.log("Got players");
      this.setState({
        mounted: true,
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })

    }.bind(this));
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  handleInitiateBattle() {
    console.log(this);
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }

  render(){
    if(this.state.mounted === true){
      return(<ConfirmBattle
              isLoading = { this.state.isLoading }
              onInitiateBattle = {this.handleInitiateBattle.bind(this) }
              playersInfo = { this.state.playerInfo  } />)
    }
    else{
      return <div> Loading </div>
    }
  }


}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
