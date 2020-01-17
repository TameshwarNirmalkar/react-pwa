import React from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { RenderMaterialDatePicker, renderSelectField } from '../../common/redux-form-component';

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
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = date => { setSelectedDate(date); };
    const { handleSubmit, initialValues } = props;

    const submitButton = () => {
        console.log('Data', getFormValues('bookingform')(initialValues));
    }
    return (
        <div className="container">
            <h3>Booking System Form</h3>
            <MuiThemeProvider>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <Field name="source" component={renderSelectField} label="Source City">
                                    <MenuItem value="PUN" primaryText="Pune" />
                                    <MenuItem value="MUM" primaryText="Mumbai" />
                                    <MenuItem value="DEH" primaryText="Delhi" />
                                </Field>
                            </div>
                            <div>
                                <Field name="destination" component={renderSelectField} label="Destination City">
                                    <MenuItem value="PUN" primaryText="Pune" />
                                    <MenuItem value="MUM" primaryText="Mumbai" />
                                    <MenuItem value="DEH" primaryText="Delhi" />
                                </Field>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <Field name="travelDate" component={RenderMaterialDatePicker} label="Travel Date" />
                            </div>

                            <div>
                                <Field name="returnDate" component={RenderMaterialDatePicker} label="Return Date" />
                            </div>
                            
                        </div>
                        <div>
                            <Button variant="contained" color="primary" onClick={submitButton}>Primary</Button>
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
            source: "PUN",
            destination: "MUM",
            travelDate: new Date(),
            returnDate: new Date(),
        },
    }
};

export default reduxForm({
    form: 'bookingform', // a unique identifier for this form
    validate,
    enableReinitialize: false,
    destroyOnUnmount: false,
    withRef: true,
    initialValues: {
        source: "PUN",
        destination: "MUM",
        travelDate: new Date(),
        returnDate: new Date(),
    },
}, mapStateToProps)(BookingForm);