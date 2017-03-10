import React from 'react'

export default class ConfirmBattle extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (this.props.isLoading === true ? <p> LOADING </p> : <p> CONFIRM BATTLE </p>)
  }
}
