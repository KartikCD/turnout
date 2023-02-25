import { Spinner } from '@/ui-components/_spinner/Spinner';
import * as React from 'react';

export const WithLoading = React.memo(({ loading, children }) => {
    if (loading === true) {
        return (
            <Spinner />
        )
    }
    return <div>{children}</div>
})