import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import asyncValidate from './asyncValidate';
// import validate from './validate';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );

const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
) => (
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        />
    );

const MaterialUiForm3 = props => {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = props;
    return (
        <div>
            <h3>Form 3</h3>
            <MuiThemeProvider>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                </form>
            </MuiThemeProvider>
        </div>
    );
};

export default reduxForm({
    form: 'R1', // a unique identifier for this form
    // validate,
    // asyncValidate,
    initialValues: {
        firstName: 'delivery',
        lastName: 'Jane Doe',
        email: 'Cheddar',
        sex: 'male',
        favoriteColor: '00ff00',
        employed: true,
        notes: ''
    },
    withRef: true
})(MaterialUiForm3);
