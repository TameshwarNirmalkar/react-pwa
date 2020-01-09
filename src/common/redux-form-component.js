import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';

export const renderTextField = (
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

export const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);

export const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

export const renderSelectField = (
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
export class MyCustomInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props
        return (
            <div>
                <span>The current value is {value}.</span>
                <button type="button" onClick={() => onChange(+value + 1)}>Inc</button>
                <button type="button" onClick={() => onChange(+value - 1)}>Dec</button>
            </div>
        )
    }
}

// export class RadioCustomButton extends Component {
//     render() {
//         const { input: { value, onChange }, label, ...rest } = this.props
//         console.log('Inputs: ', this.props);
//         return (
//             <div>
//                 <span>{label}</span>
//                 <input {...rest} value={value} onChange={() => onChange(value)} />
//             </div>
//         )
//     }
// }

export class RadioCustomButton extends Component {
    render() {
        const { input, meta, options } = this.props
        const hasError = meta.touched && meta.error;

        return (
            <div>
                    {
                        options.map( (o, i) => (
                            <label key={o.value || `label${i}`}>
                            <input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>
                            )
                        )
                    }
                    {hasError && <span className="error">{meta.error}</span>}
            </div>
        );
    }
}

