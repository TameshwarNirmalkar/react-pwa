import React, { Component } from 'react';
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
import Grid from '@material-ui/core/Grid';

// Steper
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { getFormValues } from 'redux-form';


import Form from './step1-form';

import './about.scss';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      skipped: false,
    }
  }

  componentDidMount() {
    console.log('About us Props: ', this.props);
    const { fetchEmployeeData } = this.props;
    fetchEmployeeData();
  }

  getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }

  showResults(value) {
    // const { formOne } = this.props;
    // return Promise(resolve => {
    //   setTimeout(() => {
    //     // simulate server latency
    //     window.alert(`You submitted:\n\n${JSON.stringify(value, null, 2)}`)
    //     resolve()
    //   }, 500)
    // })
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            
              <Form onSubmit={this.showResults}></Form>

            <form noValidate autoComplete="off">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        )
      case 1:
        return (
          <div>
            <form noValidate autoComplete="off">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="..."
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-full-width"
                  label="Label"
                  placeholder="Placeholder"
                  helperText="..."
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-full-width"
                  label="Label"
                  placeholder="Placeholder"
                  helperText="..."
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-full-width"
                  label="Label"
                  placeholder="Placeholder"
                  helperText="..."
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-full-width"
                  label="Label"
                  placeholder="Placeholder"
                  helperText="..."
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
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
    const { skipped, activeStep } = this.state;
    if( activeStep === 2) {
      return false;
    }
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    this.setActiveStep(activeStep + 1);
    // setSkipped(newSkipped);
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setActiveStep(activeStep - 1);
  };

  saveCard = () => {
    console.log('Save Card');
  }

  render() {
    const { employeeData } = this.props;
    const { skipped, activeStep } = this.state;
    const steps = this.getSteps();
    return (
      <div className="About">
        <h1>About page</h1>

        <Stepper activeStep={activeStep}>
          { 
            steps.map((label, index) => {
              // const stepProps = {};
              const labelProps = {};
              return ( <StepLabel key={label} {...labelProps}>{label}</StepLabel>);
          })}
        </Stepper>
        <div>
          {(
              <div>
                <div>{this.getStepContent(activeStep)}</div>
                <div>
                  <Button disabled={activeStep === 0} onClick={this.handleBack}>Back</Button>
                <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={this.saveCard}>Save</Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
{/* 
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
 */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  title: state.aboutus.title,
  employeeData: state.aboutus.employeeData,
  // formOne: state.aboutus.formOne
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchEmployeeData
  }, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(About);
