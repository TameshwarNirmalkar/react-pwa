import React, { Fragment } from 'react';
import BookingForm from './booking-form';


const BookingSystemView = (props) => {

    const handleSubmit = (values) => {
        console.log('Values: ', values);
    };

    return (
        <Fragment>
            <BookingForm onSubmit={handleSubmit}></BookingForm>
        </Fragment>
    );
}

export default BookingSystemView;