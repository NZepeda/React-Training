import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'

export default class ConfirmBattle extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props)
  }

  render(){
    return (this.props.isLoading === true ? <p> LOADING </p>
    : <div className="jumbotron col-sm-12 text-center transparentBackground">
        <h1> Confirm Players </h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            <UserDetails info = {this.props.playersInfo[0]} score= {17} />
          </UserDetailsWrapper>
            <UserDetailsWrapper header="Player 2">
              <UserDetails info= {this.props.playersInfo[1]}  score={5}/>
          </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12">
          <button type='button' className='btn btn-lg btn-success space' onClick= {this.props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12">
          <Link to='/playerOne'>
            <button type='button' className= 'btn btn-lg btn-danger space'> Reselect Players </button>
          </Link>
        </div>
        </div>
    </div>
  )
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo:PropTypes.array.isRequired
}

function puke(object){
  return <pre> {JSON.stringify(object, null, ' ')}</pre>
}
