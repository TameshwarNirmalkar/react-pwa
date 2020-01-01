import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEmployeeData } from './action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './about.scss';

class About extends Component {

  componentDidMount() {
    console.log('About us Props: ', this.props);
    const { fetchEmployeeData } = this.props;
    fetchEmployeeData();
  }

  render() {
    const { employeeData } = this.props;
    return (
      <div className="About">
        <Link to="/">Go to Home page</Link>
        <h1>About page</h1>
        <TableContainer component={Paper}>
          <Table className="" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Profile Pic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                employeeData && employeeData.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.employee_name}</TableCell>
                  <TableCell align="right">{row.employee_salary}</TableCell>
                  <TableCell align="right">{row.employee_age}</TableCell>
                  <TableCell align="right">{row.profile_image}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  title: state.aboutus.title,
  employeeData: state.aboutus.employeeData
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchEmployeeData
  }, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(About);
