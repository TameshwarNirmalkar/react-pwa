import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { renderSelectField, RenderToggleButton } from '../../common/redux-form-component';
import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submitValidate = (values) => {
    return sleep(10).then(() => {
        // simulate server latency
        if (values.DMSVarientCode !== 'DMSM010') {
            throw new SubmissionError({
                DMSVarientCode: 'DMSVarientCode is not validate',
                _error: 'Submittision Error'
            })
        } else if (values.DMSModalCode !== 'MM103') {
            throw new SubmissionError({
                DMSModalCode: 'DMSMOdal Code!!!!',
                _error: 'Submittion error'
            })
        } else {
            console.log('Forms are correctly placed', values);
        }
    })
}


const SyouvPanel = (props) => {

    const { handleSubmit, pristine, submitting, initialValues } = props;

    return (
        <div className="container">
            <h3>SUV Panel</h3>
            <MuiThemeProvider>
                <Form onSubmit={handleSubmit(submitValidate)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <Field name="DMSVarientCode" component={renderSelectField} label="Select Varient">
                                    <MenuItem value="DMSM010" primaryText="First" />
                                    <MenuItem value="DMSM011" primaryText="Second" />
                                    <MenuItem value="DMSM012" primaryText="Third" />
                                </Field>
                            </div>
                            <div>
                                <Field name="DMSModalCode" component={renderSelectField} label="Select Modal">
                                    <MenuItem value="MM101" primaryText="Pahela" />
                                    <MenuItem value="MM102" primaryText="Dushara" />
                                    <MenuItem value="MM103" primaryText="Tishra" />
                                </Field>
                            </div>
                            <div>
                                <Field component={RenderToggleButton} name="DMSColorCode"
                                    options={[{ DMSColorCode: "CL01", id: 1 }, { DMSColorCode: "CL02", id: 2 }, { DMSColorCode: "CL03", id: 3 }]} />
                            </div>
                        </div>
                        <div>
                            <Button variant="contained" disabled={pristine || submitting} color="secondary" type="submit">Apply</Button>
                        </div>
                    </div>
                </Form>
            </MuiThemeProvider>
        </div>
    );
};

export default reduxForm({
    form: 'syouvpanel',
    enableReinitialize: false,
    destroyOnUnmount: false,
    withRef: true,
})(SyouvPanel);