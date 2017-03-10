import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

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
    console.log(query);
  }

  render(){
    return(<ConfirmBattle
            isLoading = { this.state.isLoading }
            playersInfo = { this.state.playersInfo  }/>)
          }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
