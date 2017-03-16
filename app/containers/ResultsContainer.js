import React from 'react'
import Results from '../components/Results'
import GithubHelpers from '../utils/GithubHelpers'

export default class ResultsContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount(){
    console.log(this.props)

    GithubHelpers.battle(this.props.location.state.playerInfo).then(function(scores){
      this.setState({
        isLoading: false,
        scores: scores
      })
    }.bind(this))
  }

  render(){
    return(
      <Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo = {this.props.location.state.playerInfo}/>
    )
  }
}
