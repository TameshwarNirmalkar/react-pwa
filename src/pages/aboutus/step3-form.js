import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RadioButton} from 'material-ui/RadioButton';
// import asyncValidate from './asyncValidate';
// import validate from './validate';
import { renderTextField, renderRadioGroup } from '../../common/redux-form-component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



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
