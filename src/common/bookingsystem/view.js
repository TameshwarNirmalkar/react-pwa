import React, { Fragment } from 'react';
import BookingForm from './booking-form';



const BookingSystemView = (props) => {
    console.log('Props: ', props);
    return (
        <div>
            <BookingForm></BookingForm>
        </div>
    );
}

export default BookingSystemView;