import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';


import { fetchEmployeeData, nextActiveTab} from './action';
import { getCities } from '../../common/bookingsystem/action';
import './about.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Steper
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { getFormValues, isInvalid, destroy, Field } from 'redux-form';


import MaterialUiForm from './step1-form';
import MaterialUiForm2 from './step2-form';
import MaterialUiForm3 from './step3-form';
import BookingSystemView from '../../common/bookingsystem/view';

const selectedFormName = {
  1: 'PD1',
  2: 'PD2',
  3: 'R1',
}



class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      skipped: false,
      P1: {
        firstName: 'Tameshwar',
        lastName: null,
        email: null,
        sex: null,
        favoriteColor: null,
        employed: null,
        notes: null,
        myform: null,
      },
      P2: {
        firstName: 'Nisha',
        lastName: 'Jane Doe',
        email: 'Cheddar',
        sex: 'male',
        favoriteColor: '00ff00',
        employed: true,
        notes: ''
      },
      R1: {
        firstName: 'Lester',
        lastName: 'Jane Doe',
        email: 'Cheddar',
        sex: 'male',
        favoriteColor: '00ff00',
        employed: true,
        notes: ''
      }
    }
    this.saveCard = this.saveCard.bind(this);
    console.log('About us Props::: \n\n\n\n\n', this.props);
  }

  componentDidMount() {
    console.log('About us Props: ', this.props);
    const { fetchEmployeeData, nextAction, activeTab, getCityWise } = this.props;
    fetchEmployeeData();
    nextAction(activeTab);
    getCityWise();
  }

  componentDidUpdate(oProps, nProps) {
    console.log('Previous:::', oProps, "nextProps::::", nProps)
  }

  getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }

  saveCard(form) {
    const { selectedForm } = this.props;
    console.log('Results: ', selectedForm);

  }

  getStepContent(step) {
    switch (step) {
      case 1:
        return (
          <div>
            <BookingSystemView></BookingSystemView>
          </div>
        )
      case 2:
        return (
          <div>
            <MaterialUiForm onSubmit={this.saveCard} initialValues={this.state.P1}></MaterialUiForm>
          </div>
        )
      case 3:
        return (
          <div>
            <MaterialUiForm2 onSubmit={this.saveCard} initialValues={this.state.P2}></MaterialUiForm2>
          </div>
        );
      case 4:
        return (
          <div>
            <MaterialUiForm3 onSubmit={this.saveCard}></MaterialUiForm3>
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  setActiveStep(newState) {
    this.setState({ activeStep: newState})
  }

  handleNext = () => {
    const { nextAction, activeTab } = this.props;
    if( activeTab >= 4) {
      return false;
    }
    nextAction(activeTab + 1);
  };

  handleBack = () => {
    const { nextAction, activeTab } = this.props;
    nextAction(activeTab - 1);
  };

  navigateTo() {
    const { navigateTo } = this.props;
    navigateTo({
      pathname: "/",
      state: {isHomeActive: true}
    })
  }

  render() {
    const { employeeData, activeTab, isInvalid } = this.props;

    return (
      <div className="About">
        <h1 onClick={() => this.navigateTo()}>About page</h1>
        <div>
            <div>
              <div>{this.getStepContent(activeTab)}</div>
                <div hidden={true}>
                <Button disabled={activeTab <= 1} onClick={this.handleBack}>Back</Button>
                  <Button 
                    variant="contained"
                    color="secondary"
                    disabled={isInvalid} 
                    onClick={this.saveCard}>Save</Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={isInvalid} 
                    onClick={this.handleNext}>
                  {activeTab === 4 - 1 ? 'Done' : 'Next'}
                  </Button>
                </div>
            </div>
        </div>

        {/* <TableContainer component={Paper}>
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
        </TableContainer> */}

      </div>
    )
  }

  componentWillUnmount() {
    const { nextAction, formDestroy } = this.props;
    nextAction(1);
    formDestroy('PD1');
  }
}

const mapStateToProps = state => ({
  activeTab: state.aboutus.activeTab,
  title: state.aboutus.title,
  employeeData: state.aboutus.employeeData,
  selectedForm: getFormValues(selectedFormName[state.aboutus.activeTab])(state),
  // hasError: state.form[ selectedFormName[state.aboutus.activeTab] ] //(selectedFormName[state.aboutus.activeTab].syncErrors && Object.keys(selectedFormName[state.aboutus.activeTab].syncErrors).length > 0) ? true : false
  isInvalid: isInvalid(selectedFormName[state.aboutus.activeTab])(state),
  bookingDetails: state.bookingSytem.bookingPayload,
  cities: state.bookingSytem.cities,
  aboutUsRouter: state.router,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployeeData: () => dispatch(fetchEmployeeData()),
    nextAction: (num) => dispatch(nextActiveTab(num)),
    formDestroy: (frmname) => dispatch(destroy(frmname)),
    getCityWise: () => dispatch( getCities() ),
    navigateTo: (path) => dispatch( push(path) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

