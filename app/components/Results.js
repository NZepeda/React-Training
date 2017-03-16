import React, {PropTypes} from 'react'

export default class Results extends React.Component{

  constructor(props){
    super(props);
  }

  puke(obj){
    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
  }

  render(){
    return (
      <div> Results: {this.puke(this.props)} </div>
    )
  }

}

Results.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  scores: React.PropTypes.array.isRequired,
  playersInfo: React.PropTypes.array.isRequired
}
