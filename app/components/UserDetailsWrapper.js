import React, {PropTypes} from 'react'

export default class UserDetailsWrapper extends React.Component {
  constructor(props){
    super(props);

    console.log(props);
  }

  render(){
    return(
      <div className="col-sm-6">
        <p className="lead">{this.props.header}</p>
        {this.props.children}
      </div>
    )
  }
}
