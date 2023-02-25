import { Dropdown } from "@/ui-components/_dropdown/Dropdown";
import * as React from "react";
import { useField } from "react-final-form";

export const DropdownContainer = React.memo(({ name, title, children }) => {
    const {
        input: { value, onChange: onDropdownChange },
    } = useField(name);

    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <Dropdown value={value} onChange={(val) => onDropdownChange(val)}>
                {children}
            </Dropdown>
        </div>
    );
});
