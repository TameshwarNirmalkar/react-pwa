import React from 'react';
import { Contact } from './contact';

export const PhoneBookList = (props) => {
    return (
        <div className="phoneBookList">
            <ul className="list-group list-group-flush">
            {
                props.data.map((contact, ind) => (
                    <Contact key={ind} pname={contact.pname} pnumber={contact.pnumber} />
                ))
            }
            </ul>
        </div>
    )
}