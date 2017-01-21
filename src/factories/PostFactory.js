import React, { Component } from 'react';
import { connect } from 'react-redux';

const PostFactory = (ComponentToWrap, fetchAction, stateKey) => {
  class PostContainer extends Component {
    componentWillMount(){
      if(typeof this.props.fetchAction !== 'function'){
        this.props.fetchPosts();
      }
      else {
        console.warn(`Missing fetch action for ${ComponentToWrap.name}`);
      }
    }

    render(){
      return (
        <ComponentToWrap
          posts={ this.props.posts }
        />
      );
    }
  }

  const mapStateToProps = state => ({ posts: state[stateKey].items });
  const mapDispatchToProps = ({ fetchPosts: fetchAction });

  return connect(mapStateToProps, mapDispatchToProps)(PostContainer);
}

export default PostFactory;
