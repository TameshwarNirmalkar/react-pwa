import React from 'react';

export const Contact = (props) => {
    const { pname, pnumber} = props;
    return (
        <li className="list-group-item">
            <div className="contact">
                <h5 className="contactName">{pname}</h5>
                <p>{pnumber}</p>
            </div>
        </li>
    )
};
