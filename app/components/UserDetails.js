import React, {PropTypes} from 'react'

export default class UserDetails extends React.Component{

  constructor(props){
    super(props);
    var user = this.props
  }

  render(){
    return(
      <div>
        {!!this.props.score && <li className="list-group-item"><h3>User: {this.props.score}</h3></li>}
        <li className="list-group-item"> <img src={this.user.info.avatar_url} className="img-rounded img-responsive"/></li>
        {this.user.info.name && <li className="list-group-item">Name: {this.user.info.name}</li>}
        <li className="list-group-item"> Username: {this.user.info.login} </li>
        {this.user.info.location && <li className="list-group-item">Location: {this.user.info.location}</li>}
        {this.user.info.company && <li className="list-group-item">Company: {this.user.info.company}</li>}
        <li className="list-group-item"> Followers: {this.user.info.followers} </li>
        <li className="list-group-item"> Following: {this.user.info.following} </li>
        <li className="list-group-item"> Public Repos: {this.user.info.public_repos} </li>
        {this.user.info.blog && <li className="list-group-item">Blog: <a href={this.user.info.blog}>{this.user.info.blog}</a> </li>}
    </div>
    )
  }

}

// Allows you to have prop types based on key values in an object
UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}
