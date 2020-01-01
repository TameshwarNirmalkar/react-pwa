import React, { Suspense } from 'react';


export const WaitingComponent = (Component) => {
    return props => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
}