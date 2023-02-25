import * as React from 'react';
import classnames from 'classnames';
import styles from './Dropdown.module.css';

export const Dropdown = React.memo(({ value, className, children, ...rest }) => {
    return (
        <select
            value={value}
            className={classnames(styles.selectDropdown, className)}
            {...rest}>
            {children}
        </select>
    )
})