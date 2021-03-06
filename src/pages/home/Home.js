import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, setTitle } from './action';
import SyouvPanel from './../../common/syouvpanel/syouv-panel';
import PhoneBook from '../phonebook/phonebook';


class Home extends Component {

  constructor(props) {
    super(props);
    // console.log('HIstory Props:::\n\n\n\n\n', this.props)
    console.log(`Test Name: ${process.env.REACT_APP_BASE_URL}`);
  }
  
  componentDidMount() {
    const { fetchData, setTitle } = this.props;
    fetchData();
    setTitle();
  }

  getFormData = (values) => {
    console.log('Form Data', values);
  }
  
  render() {
    const contactData = [
      {pname: "Tameshwar", pnumber: "+639221113434"},
      {pname: "Falaksh", pnumber: "+639223333434"}
      ];
    const { title, userData } = this.props;
    const intialVal = { DMSVarientCode: "DMSM011", DMSModalCode: "MM102", DMSColorCode: "CL02"};
    return (
      <div className="Home">
        <h1>Home page :: { title }</h1>
        <Link to={{
          pathname: "/about",
          state: {
            fromNotifications: true
          }
        }}>About us</Link>
        <PhoneBook data={contactData} pollInterval={200} />
        {/* <SyouvPanel onSubmit={this.getFormData} initialValues={intialVal}></SyouvPanel> */}
        {/* { JSON.stringify(userData) } */}
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
