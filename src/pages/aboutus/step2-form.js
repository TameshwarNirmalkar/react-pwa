import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
// import asyncValidate from './asyncValidate';
// import validate from './validate';
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

const MaterialUiForm2 = props => {
    const { handleSubmit } = props;
    return (
        <div>
            <h3>Form 2</h3>
            <MuiThemeProvider>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label="First Name"
                        />
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
                    <div>
                        <Field name="employed" component={renderCheckbox} label="Employed" />
                    </div>
                    <div>
                        <Field
                            name="notes"
                            component={renderTextField}
                            label="Notes"
                            multiLine={true}
                            rows={2}
                        />
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
    form: 'PD2', // a unique identifier for this form
    validate,
    // asyncValidate,
    enableReinitialize: false,
    destroyOnUnmount: false,
    withRef: true
}, mapStateToProps)(MaterialUiForm2);
