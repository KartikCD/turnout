import { Dropdown } from '@/ui-components/_dropdown/Dropdown';
import * as React from 'react';

const ProgramsDropdown = React.memo(({ value, children, onChange }) => {
    const onDropdownChange = React.useCallback((e) => {
        onChange(e.target.value);
    }, [onChange])

    return (
        <div>
            <label htmlFor="programs-dropdown">Programs</label>
            <Dropdown value={value} onChange={onDropdownChange}>
                {children}
            </Dropdown>
        </div>
    )
})

export default ProgramsDropdown;