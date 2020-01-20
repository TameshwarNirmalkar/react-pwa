import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
// import DatePicker from 'material-ui/DatePicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <div>
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        />
        {/* {touched && error && <span>{error}</span>} */}
    </div>
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

export const RenderMaterialDatePicker = ({ input, label, id, meta: { touched, error } }) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            name={input.name}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id={id}
            label={label}
            value={input.value}
            onChange={input.onChange}
            autoOk={true}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
        {touched && error(<span className="error">{error}</span>)}
    </MuiPickersUtilsProvider>
);

export const RadioCustomButton = ({ input, meta, options }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            {
                options.map((o, i) => (
                    <label key={o.value || `label${i}`}>
                        <input type="radio" {...input} value={o.value} checked={o.value === input.value} />
                        {o.title}
                    </label>
                )
                )
            }
            {hasError && <span className="error">{meta.error}</span>}
        </div>
    );
}

export const RenderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
    <div>
        <DatePicker {...input}
            autoOk={true}
            defaultValue={defaultValue}
            dateForm="MM/DD/YYYY"
            selected={input.value ? moment(input.value).format('MM/DD/YYYY') : null}
            onChange={(event, value) => {
                console.log('Date picker value:::::: \n\n\n', event);
                return input.onChange(moment(event).format('MM/DD/YYYY'))
            }}
        />
        {touched && error && <span>{error}</span>}
    </div>
);

export const RenderToggleButton = ({ input: {value, onChange}, meta, options }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <ToggleButtonGroup size="small" exclusive value={value} onChange={(evt, val) => onChange(val)}>
                {
                    options.map((item, i) => (
                        <ToggleButton key={i} value={item.DMSColorCode}>{item.DMSColorCode}</ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
            {hasError && <span className="error">{meta.error}</span>}
        </div>
    );
}

