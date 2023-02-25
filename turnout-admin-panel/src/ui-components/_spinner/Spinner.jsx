import * as React from 'react';
import { Spinner as BootstrapSpinner } from "react-bootstrap";

export const Spinner = React.memo(() => {
    return <BootstrapSpinner style={{ marginLeft: '500px' }} animation="border" />
})