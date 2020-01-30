import React from 'react';
console.log('PUBLIC::', process.env.REACT_APP_PUBLIC_URL);
const HeaderComponent = ({userName, isLoggedIn}) => (
    <div style={{display: 'flex', flex: '1', 
        backgroundColor: '#333', color: '#fff', padding: '10px 5px',
        justifyContent: 'space-between'}}>
        <div><img src={`${process.env.REACT_APP_PUBLIC_URL}/static/images/logo.192.png`} /></div>
        <div>
            <span style={{paddingRight: '10px'}}>User Name::: {userName}</span>
            <span>{
                (isLoggedIn) ? 'Logout' : 'Sign in'
            }</span>
            
        </div>
    </div>
);

export default HeaderComponent;