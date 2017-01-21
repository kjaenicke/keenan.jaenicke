import React, { Component } from 'react';
import { connect } from 'react-redux';

const PostFactory = (ComponentToWrap, fetchAction) => {
  class PostContainer extends Component {
    componentWillMount(){
      this.props.fetchPosts();
    }

    render(){
      return (
        <ComponentToWrap
          posts={ this.props.posts }
        />
      );
    }
  }

  const mapStateToProps = state => ({ posts: state.tech.items });
  const mapDispatchToProps = ({ fetchPosts: fetchAction });

  return connect(mapStateToProps, mapDispatchToProps)(PostContainer);
}

export default PostFactory;
