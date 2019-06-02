import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OnePost extends Component {
  render() {
    return (
        <div>
     
     <div><h3>{this.props.obj.title_name}</h3>  
     <p>{this.props.obj.text_name}</p>
     <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Update</Link>
     <button className="btn btn-danger">Delete</button>
     </div>
     </div>
    )
  }
}

export default OnePost;