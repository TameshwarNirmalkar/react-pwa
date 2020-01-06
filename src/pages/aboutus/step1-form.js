import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

const MaterialUiForm = props => {
    const { handleSubmit } = props;
    return (
        <div>
            <h3>Form 1</h3>
            <MuiThemeProvider>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="firstName" component={renderTextField} label="First Name" />
                </div>
                <div>
                    <Field name="lastName" component={renderTextField} label="Last Name" />
                </div>
                <div>
                    <Field name="email" component={renderTextField} label="Email" />
                </div>
                <div>
                    <Field name="sex" component={renderRadioGroup}>
                        <RadioButton value="male" label="male" />
                        <RadioButton value="female" label="female" />
                    </Field>
                </div>
                <div>
                    <Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
                        <MenuItem value="ff0000" primaryText="Red" />
                        <MenuItem value="00ff00" primaryText="Green" />
                        <MenuItem value="0000ff" primaryText="Blue" />
                    </Field>
                </div>
                <div>
                    <Field name="employed" component={renderCheckbox} label="Employed" />
                </div>
                <div>
                    <Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2} />
                </div>
            </form>
            </MuiThemeProvider>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {
            firstName: ownProps.first_name,
            lastName: ownProps.lastName,
            email: ownProps.email,
            sex: ownProps.sex,
            favoriteColor: ownProps.favoriteColor,
            employed: ownProps.employed,
            notes: ownProps.notes
        },
    }
}

export default reduxForm({
    form: 'PD1', // a unique identifier for this form
    validate,
    // asyncValidate,
    enableReinitialize: false,
    destroyOnUnmount: false,
}, mapStateToProps)(MaterialUiForm);
