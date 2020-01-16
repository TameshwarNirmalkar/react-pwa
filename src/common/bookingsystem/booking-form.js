import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import { renderTextField, renderRadioGroup, renderSelectField, renderCheckbox } from '../../common/redux-form-component';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    else if (!values.lastName) {
        errors.lastName = 'Required'
    }
    else if (!values.notes) {
        errors.notes = 'Required'
    }
    return errors
};

const BookingForm = props => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => { setSelectedDate(date); };
    const { handleSubmit } = props;
    return (
        <div className="container">
            <h3>Booking System Form</h3>
            <MuiThemeProvider>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col-md-6">
                        <Field
                            name="fullName"
                            component={renderTextField}
                            label="Full Name"
                        />
                    </div>
                    <div className="col-md-6">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </div>
                    <div className="col-md-6">
                        <Field name="email" component={renderTextField} label="Email" />
                    </div>
                    <div className="col-md-6">
                        <Field name="sex" component={renderRadioGroup}>
                            <RadioButton value="male" label="male" />
                            <RadioButton value="female" label="female" />
                        </Field>
                    </div>
                    <div>
                        <Field
                            name="favoriteColor"
                            component={renderSelectField}
                            label="Favorite Color"
                        >
                            <MenuItem value="ff0000" primaryText="Red" />
                            <MenuItem value="00ff00" primaryText="Green" />
                            <MenuItem value="0000ff" primaryText="Blue" />
                        </Field>
                    </div>
                    <div className="col-md-6">
                        <Field name="employed" component={renderCheckbox} label="Employed" />
                    </div>
                    </div>
                </form>
            </MuiThemeProvider>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {
            firstName: 'delivery',
            lastName: 'Jane Doe',
            email: 'Cheddar',
            sex: 'male',
            favoriteColor: '00ff00',
            employed: true,
            notes: ''
        },
    }
};

export default reduxForm({
    form: 'bookingform', // a unique identifier for this form
    validate,
    enableReinitialize: false,
    destroyOnUnmount: false,
    withRef: true
}, mapStateToProps)(BookingForm);