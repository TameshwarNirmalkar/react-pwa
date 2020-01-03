import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import {
    Checkbox,
    RadioGroup,
    Select,
    TextField,
    Switch
} from 'redux-form-material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// validation functions
const required = value => (value == null ? 'Required' : value)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined

class Form extends Component {
    componentDidMount() {
        // this.ref // the Field
        //   .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
        //   .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
        //   .focus() // on TextField
    }

    saveRef = ref => (this.ref = ref)

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <MuiThemeProvider>
                <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="fname"
                        component={TextField}
                        placeholder="Name"
                        label="Name"
                        // validate={required}
                        ref={this.saveRef}
                    />
                </div>
                
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
          </button>
                </div>
            </form>
            </MuiThemeProvider>
        )
    }
}

const selector = formValueSelector('formOne');

Form = connect(state => ({
    numPizzas: selector(state, 'pizzas')
}))(Form)

Form = reduxForm({
    form: 'formOne',
    initialValues: {
        delivery: 'delivery',
        fname: 'Jane Doe',
        cheese: 'Cheddar',
        thinCrust: true,
        pizzas: 1
    }
})(Form)

export default Form