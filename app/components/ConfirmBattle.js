import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class ConfirmBattle extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (this.props.isLoading === true ? <p> LOADING </p>
    : <div className="jumbotron col-sm-12 text-center transparentBackground">
        <h1> Confirm Players </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            <p className="lead"> Player 1 </p>
              {puke(this.props.playersInfo[0])}
          </div>
          <div className="col-sm-6">
            <p className="lead"> PLAYER 2 </p>
              {puke(this.props.playersInfo[1])}
          </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12">
          <button type='button' className='btn btn-lg btn-success' onClick= {this.props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <br />
        <div className="col-sm-12">
          <Link to='/playerOne'>
            <button type='button' className= 'btn btn-lg btn-danger'> Reselect Players </button>
          </Link>
        </div>
        </div>
    </div>
  )
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequred,
  playersInfo:PropTypes.array.isRequired
}

function puke(object){
  return <pre> {JSON.stringify(object, null, ' ')}</pre>
}
