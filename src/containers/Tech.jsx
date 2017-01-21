import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechPosts } from '../actions';
import Tech from '../components/Tech';

class TechContainer extends Component {
    componentWillMount(){
      this.props.fetchTechPosts();
    }

    render(){
      return (
        <Tech
          posts={ this.props.posts }
        />
      );
    }
}

const mapStateToProps = state => ({ posts: state.tech.items });
const mapDispatchToProps = ({ fetchTechPosts });

export default connect(mapStateToProps, mapDispatchToProps)(TechContainer);
