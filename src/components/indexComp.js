import React, { Component } from 'react';
import axios from 'axios';
import OnePost from './OnePost'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/posts')
          .then(response => {
            this.setState({ posts: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    
      lookPost() {
          return this.state.posts.map(function(object,i){
            return <OnePost key={i} obj={object} />
          })
      }
      render() {
          return (
            <div>
                <h3 align="center">Posts</h3>
                { this.lookPost()}
            </div>

          )
      }
}