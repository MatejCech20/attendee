import { useState } from "react";
import DropdownItem from "./DropdownItem";

function Dropdown(props) {

    const [open, setOpen] = useState(false);

    const onSelect = (option) => {
        setOpen(false);
        props.onChange(option);
    }

    return <>
        {!open
        ?   <div onClick={() => setOpen(true)}>{props.selected ? props.selected : props.defaultLabel}</div>
        :   <div>
                <div onClick={() => onSelect(null, null)}>-</div>
                {props.options.map(option => (
                    <DropdownItem key = {option.label} name = {option.label} onClick = {() => onSelect(option)}/>
                ))}
            </div>
        }
    </>
}

export default Dropdown;