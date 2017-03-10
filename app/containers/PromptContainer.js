import React from 'react'
import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {
  // Sets the intial state of the component
  constructor(){
    super();
    this.state = {
      username: ""
    }
  }
  // Runs whenever the user types something into the
  // text field. (Constantly updated)
  handleUpdateUser(e){

    this.setState({
      username: e.target.value
    })
  }
  // Runs whenever the user clicks the submit button
  handleSubmitUser(e){
    e.preventDefault();
    var username = this.state.username;

    this.setState({
      username : ''
    });

    if(this.props.routeParams.playerOne){
      // This assumes user is already on the playerTwo router
      // push on the battle route to the context along with the
      // name of playerOne and playerTwo
      this.context.router.push({
        pathname: '/battle',
        query:{
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    }
    else{
      // This assumes that user is on player one screen
      // Push on playerTwo route to the context
      this.context.router.push({
        pathname: '/playerTwo/' + this.state.username
      })
    }
  }

  render(){
    return(
      <Prompt
        onSubmitUser= {this.handleSubmitUser.bind(this)}
        onUpdateUser= {this.handleUpdateUser.bind(this)}
        header= {this.props.route.header}
        username={this.state.username}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
