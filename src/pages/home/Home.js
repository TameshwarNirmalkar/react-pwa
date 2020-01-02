import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, setTitle } from './action';

class Home extends Component {
  
  componentDidMount() {
    const { fetchData, setTitle } = this.props;
    fetchData();
    setTitle();
  }
  
  render() {
    const { title, userData } = this.props;
    return (
      <div className="Home">
        <h1>Home page :: { title }</h1>
        { JSON.stringify(userData) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  title: state.home.title,
  userData: state.home.userData
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setTitle,
    fetchData  
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


