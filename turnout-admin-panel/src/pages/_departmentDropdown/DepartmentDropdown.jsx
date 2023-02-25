import { DEPARTMENTS } from "@/constants";
import { DropdownContainer } from "@/util-components/DropdownContainer";
import * as React from "react";

const DepartmentDropdown = React.memo(({ name, title }) => {
    const listOptions = React.useMemo(() => {
        return DEPARTMENTS.map((department) => {
            return (
                <option key={department} value={department}>
                    {department}
                </option>
            );
        });
    }, []);

    return (
        <DropdownContainer name={name} title={title}>
            {listOptions}
        </DropdownContainer>
    );
});

export default DepartmentDropdown;
